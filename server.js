const fetch = require('node-fetch')
const express = require('express')
const app = express()

const port = 3000

app.post('/location_specific_service', async (req, res) => {
  var fetch_res = await fetch(`https://ipapi.co/${req.ip}/json/`);
  var fetch_data = await res.json()

  res.send(`You are from ${fetch_data.region}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})