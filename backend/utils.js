const wait = require('waait');

const parseTelloState = (state) => {
  return state.split(';')
          .map(s => s.split(":"))
          .reduce((data, [key, val]) => {
            data[key] = val;
            return data;
          }, {});
};

const handleError = (err) => {
  if(err){
    console.log(`ERROR: ${err}`);
  }
}

const initSDKMode = async (tello, config) => {
  tello.send('command', 0, 7, config.telloPort, config.telloHost, handleError);
  await wait(500);

  tello.send('battery?', 0, 8, config.telloPort, config.telloHost, handleError);
  await wait(500);

  console.log('SDK mode initialized');
}

module.exports = {
  parseTelloState,
  handleError,
  initSDKMode
}
