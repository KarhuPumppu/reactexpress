const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/Get_prices', (req, res) => { 
  fetch("https://api.porssisahko.net/v1/latest-prices.json")
  .then(response => response.json())
  .then (data => {res.json(data)})

  
}); //Line 11
