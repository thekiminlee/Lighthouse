const mongoose = require("mongoose");

const PrayerRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pray_requrest: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

exports.PrayerRequest = mongoose.model("PrayerRequest", PrayerRequestSchema);
