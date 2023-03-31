import React, { useState, useEffect } from "react";

function Loading() {
  const [quote, setQuote] = useState("");

  const exerciseQuotes = [
    "A one-hour workout is 4% of your day. No excuses.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "The only bad workout is the one that didn't happen.",
    "Sweat is just fat crying.",
    "The difference between try and triumph is just a little umph!",
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "The only way to finish is to start.",
    "Strive for progress, not perfection.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "It's not about having time. It's about making time.",
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setQuote(exerciseQuotes[index]);
      index = (index + 1) % exerciseQuotes.length;
    }, 5000);
    return () => clearInterval(intervalId);
  }, [exerciseQuotes]);

  return (
    <div>
      <h1>Patience. The Chad is working...</h1>
      <p>{quote}</p>
    </div>
  );
}

export default Loading;
