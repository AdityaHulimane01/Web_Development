
// ------------------------------without using the Promises.-----------------------------------------------------------

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb(
//     "apna college",
//     () => {
//         console.log("success : your data was saved");

//         saveToDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");

//                 saveToDb(
//                     "shraddha",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );

// saveToDb("apna college");
 
// ------------------------------------// with using promises.------------------------------------------------------------

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("Reason for Promise failure : weak connection");
        }
    });
}

saveToDb("apna college")
   .then((result) => {
     console.log("Data 1 saved");
     console.log(result);
     return saveToDb("hello world")
   })
  .then((result) => {
     console.log("Data 2 saved");
     console.log(result);
     return saveToDb("shraddha")
   })
   .then((result) => {
     console.log("Data 3 saved");
     console.log(result);
   })
   .catch((error) => {
     console.log("Promise rejected");
     console.log(error);
   });