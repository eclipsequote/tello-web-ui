const dgram = require('dgram');

const config = require('./config');
const utils = require('./utils');

console.log(`HOST: ${config.telloHost}`);
console.log(`PORT: ${config.telloPort}`);

const tello = dgram.createSocket('udp4');
tello.bind(config.telloPort);

const telloState = dgram.createSocket('udp4');
telloState.bind(config.telloStatePort);


const commandList = ['takeoff', 'cw 180', 'land'];


const executeCommands = async(commandList, message) => {
  const currentCommand = async (commandList) => {
    if(commandList.length === 0) return
    let command = commandList.shift();//change this to a linkedList
    console.log(`${command}`);
    tello.send(command, 0, command.length, config.telloPort, config.telloHost, utils.handleError);
    console.log(`waiting for message...`);
    await tello.on('message', message => {
      console.log(`message: ${message}`);
      currentCommand(commandList);
    })
  }
  currentCommand(commandList);
}

const fly = async () => {
  await utils.initSDKMode(tello, config);
  executeCommands(commandList);
}

fly();

telloState.on('message', message => {
  console.log(`${JSON.stringify(utils.parseTelloState(message.toString()))}`);
})
