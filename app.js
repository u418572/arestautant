const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('texting')
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})