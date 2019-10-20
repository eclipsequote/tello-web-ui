const dgram = require('dgram');
const wait = require('waait');
const iohook = require('iohook');

const config = require('./config');
const commands = require('./commands');

console.log(`HOST: ${config.telloHost}`);
console.log(`PORT: ${config.telloPort}`);

const tello = dgram.createSocket('udp4');
tello.bind(config.telloPort);

tello.on('message', message => {
  console.log(`MSG: ${message}`);
});

const handleError = (err) => {
  if(err){
    console.log(`ERROR: ${err}`);
  }
}

tello.send('command', 0, 7, config.telloPort, config.telloHost, handleError);
tello.send('battery?', 0, 8, config.telloPort, config.telloHost, handleError);
