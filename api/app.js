const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;

app.get('/tweets', (req, res) => {
   const query = req.query.q;
   const count = req.query.count;

   const url = "https://api.twitter.com/1.1/search/tweets.json";

   axios.get(url, {
      params: {
         q: query,
         count: count
      },
      headers: {
         "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAM%2FEDAEAAAAAz9nK9zf0VqspxKWhWcXyMLQ0LEI%3DlnmjuQm4f08UF50EqQ5sC67KiqMa2dBR7fnbMYFSnvWO4iKKe9"
      }
   }).then((response) => {
      res.status(200).send(response.data);
   }).catch((error) => {
      res.status(400).send(error);
   })
});

app.listen(PORT, () => console.log(`Twitter API listening on port ${PORT}`));