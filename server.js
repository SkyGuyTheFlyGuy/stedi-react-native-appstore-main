const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/Skyler', (req,res) => {res.send("Hello Skyler")});

app.listen(port, ()=>console.log("Listening"));