const cluster = require('cluster');
const express = require('express');


//by running in comand line we are 
//asking if the file is being executed 
if(cluster.isMaster) {
    //cause index.js to be exexuted again 
    // in child mode 
    cluster.fork()
} else {
    // Im a child I am going to act like a server
    //and do nothing else 
    const app = express()

    app.get('/', (req, res) => {
    
        res.send('Hi there!')
    
    })
    
    app.listen(3000)   
}