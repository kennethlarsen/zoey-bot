// index.js
// Packages
const command = require('probot-commands');
// Ours
const labels = require('./lib/labels');
const close = require('./lib/close');
const open = require('./lib/open');

module.exports = robot => {
  console.log(process.env);
  // Triggered when you write:
  //    /COMMAND arguments
  command(robot, 'label', labels);
  command(robot, 'close', close);
  command(robot, 'open', open);
}
