import axios from 'axios';

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


export const getOpenAIResponse = async (fitnessInfo) => {
  return axios.post('/openai',
  { 
    fitnessInfo: fitnessInfo 
  }, 
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  );
};
