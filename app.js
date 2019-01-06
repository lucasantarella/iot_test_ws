'use strict';
const wampserver = require('wamp-server');
const server = new wampserver({
  port: 8080,
  realms: ['com.lucasantarella.iot'], // array or string
});