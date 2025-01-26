const express = require('express')
const app = express()
const port = 3000
const postRouters= require('./routers/post.js')
app.use(express.static('public'))
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.use("/post", postRouters)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  }) 