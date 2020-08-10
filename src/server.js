const express = require('express')
const server = express()

const {
    pageLanding,
    pageSuccess,
    pageStudy,
    pageGiveClasses,
    saveClasses
    } = require("./pages")

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noChache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))

.get("/", pageLanding)
.get("/success", pageSuccess)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
