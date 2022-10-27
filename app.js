const express = require("express")
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => (
    res.json({
        slackUsername: "BinsKuka",
        backend: true,
        age: 21,
        bio: "Backend Engineering HNG"
    })
))
app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})