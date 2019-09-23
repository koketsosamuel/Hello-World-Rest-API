const express = require("express")
const app = express()

app.get("/", function (req, res) {
  try {
    res.send("Hello World")
  } catch(err) {
    res.json({hi: "hello"})
  }
})

app.listen(process.env.PORT || 3000)