import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT || 5000
const hostname = process.env.HOSTNAME

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
