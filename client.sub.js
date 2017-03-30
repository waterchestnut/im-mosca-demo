/**
 * @fileOverview
 * @author menglb 2017/3/30
 * @module
 */
'use strict';

var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://localhost:5112',{clientId:'1',clean:false});

client.subscribe('order',{qos:1});

client.on('message', function (topic, message) {
    console.log(message.toString());
});