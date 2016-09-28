var mongoose = require('mongoose');
var Requester = require('requester');
var express = require('express');
var router = express.Router();
var Channel = require('../models/Channels.js');


var requester = new Requester({debug: 1});

/* GET single channel page. */
router.get('/:channelSlug', function(req, res, next) {
    Channel.findOne({slug: req.params.channelSlug}, function(err, channel) {
        if (err)
            return next(err);
        console.log(channel.embedCode)
        if (channel) {
                res.render('channel', {
                    title: channel.title,
                    playerSpan: channel.embedCode
                });
        } else {
            res.render('channel', {
                title: 'Eternity Ready'
            });
        }
    });
});

module.exports = router;

//req.post

//smile-of-a-child
