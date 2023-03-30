import React from "react";
import { useState } from "react";
import GoogleImages from "googleimg"


// client.search('Steve Angello')
//  .then(images => {
//   /*
//   [{
//     "link": 'http://steveangello.com/boss.jpg',
//     "mime": 'image/jpeg',
//     "snippet": 'Steve Angello',
//     "image": {
//       "contextLink": 'http://steveangello.com',
//       "width": 1024,
//       "height": 768,
//       "byteSize": 1000,
//       "thumbnailLink": 'http://steveangello.com/thumbboss.jpg',
//       "thumbnailWidth": 512,
//       "thumbnailHeight": 512
//     }
//   }]
//   */
//  });

// paginate results
// client.search('Steve Angello', {page: 2});

// search for certain size
// client.search('Steve Angello', {size: 'large'});


const Home = async () => {
const client = new GoogleImages('b465a8304d3e04992', 'AIzaSyBf4eZJ_KIHX7_Z07UM516NrBeABQYPU4s');
//const [images, setImages] = useState([]);
//client.search('exercise diagram squat ', {page: 1})
// .then(data => setImages(data))
const exercise = "squat"
const API = `https://cse.google.com/cse?cx=65ded13daa12f421d#gsc.tab=0&gsc.q=${exercise}`

try {
const results = await fetch(API, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
})
const images = await results.json();
} catch (err) {
    console.log(err)
}

  return (
    <div className="container">
        
    </div>
  );
};

export default Home;
