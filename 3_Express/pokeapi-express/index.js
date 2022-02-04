const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send("Hola mundo!");
})

app.get('/trainer', (req, res) => {
    const objeto = {id: 1, name: 'monserrat garcia'}
    res.json(objeto);
})
app.listen(port, () =>{
    console.log(`servidor iniciado, puerto ${port}`);
})
