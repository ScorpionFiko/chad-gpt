const { OpenAIApi, Configuration } =require("openai");


const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config();
const axios = require('axios');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/google_image_search', async (req, res) => {
  try {
    const search = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=${req.body.query}&num=1&searchType=image&siteSearch=workoutlabs.com&siteSearchFilter=i`);
    res.json(search.data.items);
  } catch (err) {
    res.json([]);
  }
});

app.post('/openai', async (req, res) => {
  console.log("Request received:", req.body); // Add this line to log the request body
  const {
    age,
    height,
    weight,
    gender,
    exerciseFrequency,
    equipment,
    fitnessGoal,
  } = req.body.fitnessInfo;
  
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    })
  );
  
  const aiPrompt = `
      ${age} years of age, ${height} in height, ${weight}lbs, ${gender}, able to exercise ${exerciseFrequency} times per week, access to ${equipment}, end goal is ${fitnessGoal} and 1 month to achieve goal

      build exercise routine given this prompt. respond ONLY in JSON. Do not include any notes. Use this as schema:

      {
        "exerciseRoutine": [
          {
            "day": "Monday",
            "exercises": [
              {
                "exerciseName": "",
                "exerciseType": "",
                "sets": "",
                "reps": "",
                "secondsRest": "",
                "minutesDuration": "",
                "intensity": "",
              },
            ],
          },
        ],
      }
    `;

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: aiPrompt }],
        
        max_tokens: 2000,
      });
      res.json(response.data.choices[0].message.content);
    } catch(err) {
      res.json([]);
    }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
