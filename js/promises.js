//
// //status of success in js 200
//   //  A promise represents an event that might not yet have happened. A promise will be in one of three states:
//
//    // pending: the event has not yet happened.
//   //  resolved: the event has happened successfully.
//   //  rejected: the event has happened and an error condition occurred.
//   //  We can create a promise object like so:
//
//
//
// //When creating a promise, we pass 2 functions, resolve and reject, that, when invoked, will change the promise's state from pending to either resolved or rejected. Until either one of these functions is called, the promise will be in a pending state.
//
// //A promise object has two frequently used methods:
//
//     //.then: accepts a callback that will run when the promise is resolved.
//    // .catch: accepts a callback that will run when the promise is rejected.
//
//
//
// //In the above example, we have a roughly equal chance of resolving or rejecting the promise.
//
//   //  The power of promises comes in the ability to return a value from an asynchronous operation
//
//
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));
// //When we first log myPromise, we will see in the console a promise that is pending, because neither the resolve or reject methods have been called yet. By using .then and .catch, we can specify a function to run when the promise is resolved or rejected.
//
//   //  We are using a setTimeout because it easily represents an asynchronous operation, but you could imagine instead we are in the callback function for an AJAX request.
//
//  //   Resolving Values
// //The .resolve and .reject functions can also be passed a value, which will in turn be passed to the callback function attached to the promise via .then and .catch.
//
//   //  Let's write a promise that simulates an API request:
//
//
// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"


//Beginning of Exercise



// wait(1000).then(() => console.log('You\'ll see this message after 1 second'));
//
// const wait2 = () => {
//     return fetch("url here");
//
//     }
//     wait2().then((data) => {
//         return data.json();
//
// }).then((data2) => {
//     console.log(datat2);
//     })




// function getData(username){
//   return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`, {
//       headers: {
//           'Authorization': gitHub,
//           'Accept': 'application/vnd.github.cloak-preview',
//
//
//       }
//   })
//           .then(response => response.json())
//           .then(res => console.log(res))
//           .then (data => {
//               for (let event of data) {
//                   if (event.type === "PushEvent")
//                       return event;
//               }
//
//           })
//
//
//   }
// getData('danielfryer');

// function lastCommit(user) {
//     return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': "token " + gitHub}})
//         .then((data) => {
//             console.log(data);
//             return data.json()
//         }).then((jsonData) => {
//             console.log(jsonData);
//             return "Date is: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
//         })
// }
//
// lastCommit('faith.garza001').then((data)=> console.log(data))

function getGithubLastUserCommit(username) {
    return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`, {
        headers: {
            'Authorization': gitHub,
            'Accept': 'application/vnd.github.cloak-preview'
        }
    })
        .then(response => {
            console.log(response);
            return response;
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let commit = res['items'][0]['commit'];
            let repo = res['items'][0]['repository']
            let commitInfo = {
                sha: res['items'][0]['sha'],
                url: commit['url'],
                committer: commit['committer']['name'],
                date: commit['committer']['date'],
                message: commit['message'],
                repository: repo['name'],
                repositoryOwner: repo['owner']['login']
            };
            return commitInfo;
        })
};
console.log(getGithubLastUserCommit('nolandseigler'));
function getGithubLastUserCommitWithEvents (username) {
    return fetch (`https://api.github.com/users/${username}/events`, {
        headers: {
            'Authorization': `token ${gitHub}`
        }
    })
        .then(response => response.json())
        .then(res => res.find(element => element['type'] === 'PushEvent'))
        .then(data => {
            let commit = data['payload']['commits'][0];
            let eventInfo = {
                sha: commit['sha'],
                url: commit['url'],
                committer: commit['author']['name'],
                date: data['created_at'],
                message: commit['message'],
                repository: data['repo']['name'],
                repositoryOwner: `Could not find this using this endpoint(events)`
            }
            return eventInfo;
        })
}
console.log(getGithubLastUserCommitWithEvents('nolandseigler'));
