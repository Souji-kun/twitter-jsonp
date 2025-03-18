const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/tweets/:id", async (req, res) => {

  const tweetId = req.params.id;
  const bearerToken = "AAAAAAAAAAAAAAAAAAAAADfxzwEAAAAAo1uppeSIC0pCEKgREg3BjStDXis%3D76NGbt5dr82OZJCJxbiHyQ50xj2SGxPl7uL7iOcR2aILxOb1Py";
  const url = `https://api.twitter.com/2/tweets/${tweetId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization':` Bearer ${bearerToken}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching tweet:", error);
    res.status(500).send("Error fetching tweet");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});