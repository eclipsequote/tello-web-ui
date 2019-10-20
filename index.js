const dgram = require('dgram');
const wait = require('waait');
const iohook = require('iohook');

const config = require('./config');
const commandDelays = require('./commandsDelays');

console.log(`HOST: ${config.telloHost}`);
console.log(`PORT: ${config.telloPort}`);

const tello = dgram.createSocket('udp4');
tello.bind(config.telloPort);

const handleError = (err) => {
  if(err){
    console.log(`ERROR: ${err}`);
  }
}

const commandList = ['takeoff', 'cw 180', 'land'];

const initSDKMode = async () => {
  tello.send('command', 0, 7, config.telloPort, config.telloHost, handleError);
  await wait(commandDelays['command']);
  tello.send('battery?', 0, 8, config.telloPort, config.telloHost, handleError);
  await wait(commandDelays['battery?']);
  console.log('SDK mode initialized');
}

const executeCommands = async(commandList, message) => {
  await initSDKMode();
  const currentCommand = async (commandList) => {
    if(commandList.length === 0) return
    let command = commandList.shift();//change this to a linkedList
    console.log(`${command}`);
    tello.send(command, 0, command.length, config.telloPort, config.telloHost, handleError);
    await tello.on('message', message => {
      console.log(`waiting for message....${message}`);
      currentCommand(commandList);
    })
  }
  currentCommand(commandList);
}

executeCommands(commandList);
