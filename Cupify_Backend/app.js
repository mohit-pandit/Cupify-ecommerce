const express = require('express');
const app = express();
const port = 5500;

app.get('/welcome', (req, res) => {
    res.send("Welcome to cupify backend")
})

app.listen(port,()=>{
    console.log("Cupify Backend is listening on port no",port);
})