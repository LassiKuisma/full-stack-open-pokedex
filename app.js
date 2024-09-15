const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

// lorem ipsum etc
app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('900')
})

let everythingOk = true

app.get('/health', (req, res) => {
  if (everythingOk) {
    res.send('ok')
  } else {
    res.send(500)
  }
})

app.post('/togglehealth', (req, res) => {
  everythingOk = !everythingOk
  res.json({ health: everythingOk })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
