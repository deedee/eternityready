import { Router } from 'express'
const mongoose = require('mongoose')
const router = Router();
const Channel = require('../models/Channels.js')

// Get all channels.
router.get('/channels/all', function(req, res, next) {
	Channel.find({}, function(err, channels) {
		if (err)
			return next(err);
		res.json(channels);
	});
});

// Get a single channel data by id.
router.get('/channel/:channelSlug', function(req, res, next) {
	Channel.findOne({slug: req.params.channelSlug}, function(err, channel) {
		if (err)
			return next(err);
		res.json(channel);
	});

});

module.exports = router;
