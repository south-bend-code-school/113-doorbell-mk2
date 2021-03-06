var functions = require("firebase-functions");
var request = require("request");

exports.onPersonCreate = functions.database.ref('Doorbell/{person}').onCreate(snapshot => {
  const data = snapshot.val();
  const name = data.name;
  const appointment = data.appointment;
  return request.post(
    "https://hooks.slack.com/services/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",
    { json: { text: `${name} is at the door for ${appointment}` } }
  );
});


// var slack = require("slack");
// slack.api.test({hello: "world"}, console.log);
// slack.api.test({nice:1}).then(console.log).catch(console.log);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
