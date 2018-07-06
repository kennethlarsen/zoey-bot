const emberista = require('./emberista');

const close = async (context, command) => {
  function closeIssue(context, command) {
    context.github.issues.edit(context.issue({state: 'closed'}))
  }

  emberista(context.payload.sender.login, closeIssue, context, command);
}

module.exports = close
