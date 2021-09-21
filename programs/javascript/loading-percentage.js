const logUpdate = require('log-update');

const char = '-';
const min = 0;
const max = 100;
const steps = 5;
let i=0;

const mInterval = setInterval(() => {
  let progress = '';
  for (let c = 0; c < i; c++) {
    progress += char;
  }
  const progressString = `Loading [${progress} ${i * steps}% ]`;
  logUpdate(progressString); //progress for plain
  i ++ ;
  if (i > max/steps) {
    logUpdate("Downloading is done!");
    logUpdate.done();
    clearInterval(mInterval);
  }
}, 200)
