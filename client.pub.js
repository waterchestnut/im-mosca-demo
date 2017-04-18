/**
 * @fileOverview
 * @author menglb 2017/3/30
 * @module
 */
'use strict';

var mqtt = require('mqtt');

var client = mqtt.connect( 'mqtt://localhost:5112');

//client.subscribe('presence');
var num = 0;
setInterval(function (){
    client.publish('data', 'Hello mqtt ' + (num++),{qos:1, retain: true});
    //client.publish('order', 'Hello mqtt ' + (num++),{qos:1, retain: true});
}, 1000);