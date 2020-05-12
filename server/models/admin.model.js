const mongoose = require("mongoose");

const CurrentMinistrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const PastMinistrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

exports.CurrentMinistry = mongoose.model("CurrentMinistry", CurrentMinistrySchema)
exports.PastMinistry = mongoose.model("PastMinistry", PastMinistrySchema)