const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('10')
})

app.get('/health', (req, res) => {
  // i have added some random comments here
  res.send('ok')
})
// das
// skip this commit

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
// more random comments
// lorem
// ipsum
// and so on
