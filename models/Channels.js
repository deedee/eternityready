var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema({
    uniqueId: String,
    channelNumber: String,
    title: String,
    slug: String,
    description: String,
    thumb: String,
    embedCode: String
});

var Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel
