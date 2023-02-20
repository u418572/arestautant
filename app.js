const express = require('express')
const app = express()
const port = 3000
// include handlebars
const exphbs = require('express-handlebars')
// include restaurant.json
const restaurants = require('./restaurant.json')


app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  // console.log(restaurants.results)
  res.render('index', {restaurants: restaurants.results})
})

app.get('/search', (req, res) => {
  let keyword = req.query.keyword
  const restaurant = restaurants.results.filter(item => (item.name.toLowerCase()+item.category.toLowerCase()).includes(keyword.toLowerCase()))
  console.log(restaurant)
  res.render('index', {restaurants: restaurant, keyword: keyword})
})

app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurants.results.find(item => item.id.toString() === req.params.id)

  res.render('show', {restaurant: restaurant})
})
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})