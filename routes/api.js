import { Router } from 'express'
import {Types} from 'mongoose'
const ObjectId = Types.ObjectId

const router = Router()
const Channel = require('../models/Channels.js')

// Get all channels.
router.get('/channels', function(req, res, next) {
	Channel.find({}, function(err, channels) {
		if (err) return next(err)
		res.json(channels)
	})
})

// Get a single channel data by id.
router.get('/channels/:channelId', function(req, res, next) {
	const {channelId} = req.params
	Channel.findOne({_id: new ObjectId(channelId)}, function(err, channel) {
		if (err) return next(err)
		res.json(channel)
	})
})

// **********************************************
// keeping this here for kegacy purposes
router.get('/channel/:channelSlug', function(req, res, next) {
	Channel.findOne({slug: req.params.channelSlug}, function(err, channel) {
		if (err) return next(err)
		res.json(channel)
	})
})
// **********************************************

module.exports = router
