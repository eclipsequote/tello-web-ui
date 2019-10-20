const dgram = require('dgram');
const wait = require('waait');

const config = require('./config');

console.log(`HOST: ${config.telloHost}`);
console.log(`PORT: ${config.telloPort}`);

const tello = dgram.createSocket('udp4');
tello.bind(config.telloPort);

const telloState = dgram.createSocket('udp4');
telloState.bind(config.telloStatePort);

const handleError = (err) => {
  if(err){
    console.log(`ERROR: ${err}`);
  }
}

const commandList = ['takeoff', 'cw 180', 'land'];

const initSDKMode = async () => {
  tello.send('command', 0, 7, config.telloPort, config.telloHost, handleError);
  await wait(500);

  tello.send('battery?', 0, 8, config.telloPort, config.telloHost, handleError);
  await wait(500);

  console.log('SDK mode initialized');
}

const executeCommands = async(commandList, message) => {
  const currentCommand = async (commandList) => {
    if(commandList.length === 0) return
    let command = commandList.shift();//change this to a linkedList
    console.log(`${command}`);
    tello.send(command, 0, command.length, config.telloPort, config.telloHost, handleError);
    console.log(`waiting for message...`);
    await tello.on('message', message => {
      console.log(`message: ${message}`);
      currentCommand(commandList);
    })
  }
  currentCommand(commandList);
}



const fly = async () => {
  await initSDKMode();
  executeCommands(commandList);
}

fly();

telloState.on('message', message => {
  console.log(`${message}`);
})
