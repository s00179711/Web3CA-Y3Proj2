import * as functions from 'firebase-functions';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addSuggest = functions.https.onCall((_movieData: any) => {
    return admin.database().ref('/suggestions').push(_movieData)
})

exports.addThisMonth = functions.https.onCall((_movieData: any) => {
    return admin.database().ref('/thisMonth').push(_movieData)
})
