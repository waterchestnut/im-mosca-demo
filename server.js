/**
 * @fileOverview
 * @author menglb 2017/3/30
 * @module
 */
'use strict';

var mosca = require('mosca');
var settings = {
    port: 5112,
    backend:{
        type: 'zmq',
        json: false,
        zmq: require("zmq"),
        port: "tcp://127.0.0.1:33333",
        controlPort: "tcp://127.0.0.1:33334",
        delay: 5
    },
    persistence:{
        factory: mosca.persistence.Mongo,
        url: "mongodb://192.168.100.216:8017/mosca"
    },
    http: {
        port: 3112,
        bundle: true,
        static: './'
    }
};
var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

server.on('ready', function(){
    console.log('Mosca server is up and running');
});

server.on('published', function(packet, client) {
    console.log('Published', packet.payload.toString());
});