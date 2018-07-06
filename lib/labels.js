const emberista = require('./emberista');

const labels = async (context, command) => {
  function addLabel(context, command) {
    // Fetch all labels from command
    // TODO: Strip trailing and starting space
    const labels = command.arguments.split(',')

    const info = {
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
      number: context.payload.issue.number,
      username: context.payload.sender.login
    }

    return context.github.issues.addLabels({ ...info, labels: labels })
  }

  emberista(context.payload.sender.login, addLabel, context, command);
}

module.exports = labels
