const express = require('express')
const app = express()
const port = 3000
// include handlebars
const exphbs = require('express-hnadlebars')

app.engine('handlebars', exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.send('texting')
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})