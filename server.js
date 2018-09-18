const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const request = require("request");
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));


// app.use(express.bodyParser());

app.post("/api/test", (req, res) => {
  console.log(req.body.food);
  let food = req.body.food;
  const url = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + food;
  // const url = "http://api.giphy.com/v1/gifs/random?api_key=nmyDoNuU7ZFmjpQCMgUY90iJvBsoPehA";
  request.get(url, (err, response, body) => {
    if (err) {
        console.log("err in post ")
      console.error(err);
    }

    body = JSON.parse(body);
    
    const meals = [];
    body.meals.forEach(data => {
      meals.push({
        name: data.strMeal,
        category: data.strCategory,
        area: data.strArea,
        instructions: data.strInstructions,
        image: data.strMealThumb,
      });
    });

    res.json({ express: meals });
  });
});
