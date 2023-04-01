import axios, * as others from 'axios';

export const searchGoogleImages = async (query) => {
  return axios.post('/google_image_search',
  { 
    query: query 
  }, 
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  );
};
