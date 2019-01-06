'use strict';
const wampserver = require('wamp-server');
const server = new wampserver({
  port: 9080,
  realms: ['com.lucasantarella.iot'], // array or string
});