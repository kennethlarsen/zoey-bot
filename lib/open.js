const emberista = require('./emberista');

const open = async (context, command) => {
  function openIssue(context, command) {
    context.github.issues.edit(context.issue({state: 'open'}));
  }

  emberista(context.payload.sender.login, openIssue, context, command);  
}


module.exports = open
