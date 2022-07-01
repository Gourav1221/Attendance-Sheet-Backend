

const express = require('express')

const app = express()


app.use(express.json())


app.listen(3001,async()=>{
    try{
        console.log("listening on 3001")
    }
})