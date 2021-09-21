const logUpdate = require('log-update');

let frames = ['/', '-', '\\'];

let i=0;

setInterval(() => {
  const frame = frames[i++  % frames.length];
  logUpdate(frame);
}, 200)
