/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

// mapboxgl.accessToken = mapboxToken;
//
// var mapOptions = {
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/dark-v10',
// 	zoom: 15,
// 	center: [-98.4916, 29.4252],
// }
//
// var map = new mapboxgl.Map(mapOptions);

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.

// var markerOptions = {
// 	color: "#ff0000",
// 	draggable: true
// }
//
// var marker = new mapboxgl.Marker(markerOptions)
// 	.setLngLat([-98.4861, 29.4260])
// 	.addTo(map);



// TODO TOGETHER: Change the color of the marker


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


// /**********************************************
//  * 					POPUPS
//  *********************************************/
// // Popups are the info boxes that appear on a map and may describe a given location.
// // Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup
//
//
// // TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
//
// // var popup = new mapboxgl.Popup()
// // 	.setLngLat([-98.489615, 29.426827])
// // 	.setHTML("<h1>Codeup Rocks!</h1>")
// // 	.addTo(map)
//
//
// // TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
//
//
// // var alamoPopup = new mapboxgl.Popup()
// // 	.setHTML("<p>Remember The Alamo!</p>")
// // 	.addTo(map)
// //
// // marker.setPopup(alamoPopup)
//
//
//
// // TODO: Review the popup docs. What are some additional options we can pass to the popup?
// // TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
//
//
//
// /**********************************************
//  * 					Geocoder
//  *********************************************/
// // Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
//
//
// // TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
//
// mapboxgl.accessToken = mapboxToken;
//
// var mapOptions = {
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 15,
//     center: [-98.4916, 29.4252]
// }
//
// var map = new mapboxgl.Map(mapOptions);
//
// // geocode("The White House", mapboxToken).then(function (result) {
// // 	console.log(result)
// // 	// recenter the map
// // 	// add a marker
// // 	map.setCenter(result)
// // 	map.setZoom(20)
// // })
//
//
// //TODO: Using the geocode method above, add a marker at Codeup to the map
// //TODO: Instead of setCenter try using map.jumpTo()
// //TODO: Instead of setCenter try using map.flyTo()
//
// // TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
//
// reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function (result) {
//     console.log(result);
// })
//
//
//
//
//
//
// // TODO: Reverse geocode coordinates of your choice using the reverse geocode method



// 1. What is an array in Javascript?
//
//     2. What is an object in Javascript?
//
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?
//
//
// ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//
//         //     ```
// Write the function
// parameter is an array
// since we have an array i need to loop --> for each
//check to see if its a number. (if  typeof  eachNumber === "number")
// if it is a number push number to bucket array
// //in an ascending order --> .sort method
// returning an array []


//
// function filterNumbers(inputArray) {
//     var bucket = [];
//     inputArray.forEach(function(item) {
//         if (typeof item === "number"){
//             bucket.push(item)
//         }
//     });
//     bucket.sort(function(a,b){
//         return a - b;
//     });
//     return bucket;
// }
// console.log(filterNumbers(["fred", true, 5, 3]));
// console.log([1, 30, 4, 21, 1000000, true, "string"]);
// ```
//
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
// //Write the function
// // parameter is an array
// // since we have an array i need to loop --> for each
//
//
//
//
   var dogs =  [
        {
             name: "Chompers",
             breed: "Pug",
             age: 7
         },
         {
             name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastif",
             age: 10
         }
     ];
   function getOlder(arr, index){
    dogs.forEach(function(dog, index){
        dogs[index].age += 1;
    })
}
//    ```js
//     //Example output
//     [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//         }
//     ];
// function getOlder(inputArray,index(dogs.forEach(getOlder()))
//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
//
//     ```js
//             // Example input
//             [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ]
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
//          //Example Input:
//           [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];
//     ```
//
//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function
//     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//