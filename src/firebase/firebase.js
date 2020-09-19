import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log(e);
//     });



// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 918293802
// });


// database.ref('expenses').push({
//     description: 'Phone',
//     note: '',
//     amount: 998,
//     createdAt: 9127927
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 109500,
//     createdAt: 12903223
// });

// database.ref().set({
//     name: "Igor",
//     age: 25,
//     isSingle: false,
//     location: {
//         city: 'Sao Paulo',
//         country: 'Brasil'
//     },

// }).then(() => {
//     console.log("success");
// }).catch((e) => {
//     console.log("fail", e);
// });

// database.ref('attributes').set({
//     height: 1.8,
//     weight: 70
// }).then(() => {
//     console.log("success");
// }).catch((e) => {
//     console.log("fail", e);
// });

// // database.ref('isSingle').
// //     remove()
// //     .then(() => {
// //         console.log("success");
// //     }).catch((e) => {
// //         console.log("fail", e);
// //     });

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     isSingle: null,
//     job: "Soft enginer"
// });

// database.ref('age')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (e) => {
//     console.log(e);
// });


// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3000)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)


// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10000)