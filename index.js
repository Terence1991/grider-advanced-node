const cluster = require('cluster');
const express = require('express');

console.log(cluster.isMaster)

const app = express()

app.get('/', (req, res) => {

    res.send('Hi there!')

})



app.listen(3000)