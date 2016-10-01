import { Router } from 'express'
import {Types} from 'mongoose'
const ObjectId = Types.ObjectId

const router = Router()
const Channels = require('../models/Channels.js')
const Categories = require('../models/Categories.js')

// Get all channels.
router.get('/channels', function(req, res, next) {
	Channels.find({}, function(err, channels) {
		if (err) return next(err)
		res.json(channels)
	})
})

// Get a single channel data by id.
router.get('/channels/:channelId', function(req, res, next) {
	const {channelId} = req.params
	Channels.findOne({_id: new ObjectId(channelId)}, function(err, channel) {
		if (err) return next(err)
		res.json(channel)
	})
})

// Get a single channel data by id.
router.get('/categories', function(req, res, next) {
	Categories.find((err, categories) => {
		if (err) return next(err)
		res.json(categories)
	})
})

// Get a single channel data by id.
router.get('/categories/:categoryId', function(req, res, next) {
	const {categoryId} = req.params
	Categories.findOne({_id: new ObjectId(categoryId)}, function(err, category) {
		if (err) return next(err)
		res.json(category)
	})
})

// Get a single channel data by id.
router.get('/categories/:categoryId/channels', function(req, res, next) {
	const {categoryId} = req.params
	Channels.find({categoryIds: new ObjectId(categoryId)}, function(err, channels) {
		if (err) return next(err)
		res.json(channels)
	})
})

// **********************************************
// keeping this here for kegacy purposes
// router.get('/channel/:channelSlug', function(req, res, next) {
// 	Channel.findOne({slug: req.params.channelSlug}, function(err, channel) {
// 		if (err) return next(err)
// 		res.json(channel)
// 	})
// })
// **********************************************

module.exports = router
