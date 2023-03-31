import React from "react";
import { useState, useEffect } from "react";
import {searchGoogleImages} from '../utils/API'


const Home = () => {

  const [woImages, setWOImages] = useState('');
  const handleEvent = async (event) => {
    event.preventDefault();
    try {
      const results = await searchGoogleImages(event.target.value);
      const images = await results.json();
      console.log(images.items[0].link)
      setWOImages(images.items[0].link);
      console.log(woImages)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="container">
      <form >
        <input type="submit" value="Walking Lunges " onClick={handleEvent} />
        <input type="submit" value="Treadmill " onClick={handleEvent} />
        <input type="submit" value="Barbell Squats " onClick={handleEvent} />
      </form>
      <img width="50%" src={woImages} alt='diagram' />

    </div>
  );
};

export default Home;
