const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  const users = [{username: 'abc67'}, {username: 'j.pin837'}]
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
