import 'dotenv/config'
import app from './app.js'
const port = process.env.PORT || 5000
const hostname = process.env.HOSTNAME

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
