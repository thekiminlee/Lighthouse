// dependencies import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Port assignment
const PORT = 5000;

// App initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

const routes = express.Router();

// database initialization
mongoose.connect(
    "mongodb://mongo:27017/lighthouse", 
    { 
        useNewUrlParser: true,
        user: "admin",
        pass: "password"
    }
).then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// models import
const site = require("./models/site.model");
const admin = require("./models/admin.model");

// API routing points

// GET
routes.route("/api/admin/prayer").get(function(req, res) {
    site.PrayerRequest.find(function(err, prayers) {
        if(err) {
            console.log(err);
        } else {
            res.json(prayers)
        }
    });
});

routes.route("/api/site/ministry/current_ministry").get(function(req, res) {
    admin.CurrentMinistry.find(function(err, currentMinistry) {
        if (err) {
            console.log(err);
        } else {
            res.json(currentMinistry);
        }
    });
});

routes.route("/api/site/ministry/past_ministry").get(function(req, res) {
    admin.PastMinistry.find(function(err, pastMinistry) {
        if (err) {
            console.log(err);
        } else {
            res.json(pastMinistry);
        }
    });
});

// POST
routes.route("/api/admin/ministry").post(function(req, res) {
    admin.CurrentMinistry.find(function(err, currentMinistry) {
        if (currentMinistry.length == 0) {
            let ministry = new admin.CurrentMinistry(req.body);

            ministry.save()
                .then(resp => {
                    res.status(200).send("Current ministry added");
                })
                .catch(err => {
                    res.status(400).send("Failed to add current ministry")
                });
        } else {
            let pastMinistry = new admin.PastMinistry();

            pastMinistry.title = currentMinistry[0].title;
            pastMinistry.content = currentMinistry[0].content;

            currentMinistry[0].title = req.body.title;
            currentMinistry[0].content = req.body.content;

            currentMinistry[0].save()
                .catch(err => {
                    console.log(err);
                });

            pastMinistry.save()
                .then(resp => {
                    res.status(200).send("Past ministry added and current ministry updated");
                })
                .catch(err => {
                    res.status(400).send("Failed to add past ministry");
                })
        }
    })
})

routes.route("/api/site/prayer").post(function(req, res) {
    let prayer = new site.PrayerRequest(req.body);
    prayer.save()
        .then(resp => {
            res.status(200).send("Prayer request added");
        })
        .catch(err =>{
            res.status(400).send("Failed to add prayer request");
        })
})

// DELETE
routes.route("/api/admin/prayer/delete/:id").delete(function(req, res) {
    site.PrayerRequest.findById(req.params.id, function(err, prayer){
        if(!prayer) {
            res.status(404).send("Prayer request not found");
        } else {
            prayer.remove()
                .then(resp => {
                    res.status(200).json({ prayer: "Request removed"});
                })
                .catch(err => {
                    res.status(400).send("Failed to remove prayer request");
                })
        }
    })
})

routes.route("/api/admin/ministry/delete/:id").delete(function(req, res) {
    admin.PastMinistry.findById(req.params.id, function(err, pastMinistry) {
        if (!pastMinistry) {
            res.status(404).send("ministry not found");
        } else {
            pastMinistry.remove()
                .then(resp => {
                    res.status(200).json({ pastMinistry: "Past ministry removed"})
                })
                .catch(err => {
                    res.status(400).send("Failed to remove past ministry");
                })
        }
    })
})

app.use("/", routes);
app.listen(PORT, function() {
    console.log("Server running on port:", PORT);
});