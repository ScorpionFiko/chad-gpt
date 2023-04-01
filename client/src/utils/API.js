require('dotenv').config()

export const searchGoogleImages = async (query) => {

    const test = await fetch("/config", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const config = await test.json();
    return fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=${query}&num=1&searchType=image&siteSearch=workoutlabs.com&siteSearchFilter=i`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  };
  