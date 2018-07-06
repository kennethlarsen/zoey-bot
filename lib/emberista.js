const Airtable = require('airtable');

const emberista = async(username, triageAction, context, command) => {
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appp6nSPzPzDRHSQH');

  base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.some(async function(record) {
        if (record.get('Name') === username) {
          await triageAction(context, command);
          return;
        }
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

  }, function done(err) {
      if (err) { console.error(err); return; }
  });
}

module.exports = emberista
