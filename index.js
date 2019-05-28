const cluster = require('cluster');

console.log(cluster.isMaster)
//by running in comand line we are 
//asking if the file is being executed 
if(cluster.isMaster) {
    //cause index.js to be exexuted again 
    // in child mode 
    cluster.fork()
    cluster.fork()
} else {
    // Im a child I am going to act like a server
    //and do nothing else 
    const express = require('express');
    const app = express()
    const doWork = (duration) => {
        const start = Date.now()
        while(Date.now() - start < duration) {}
    }


    app.get('/', (req, res) => {
        doWork(5000)
        res.send('Hi there!')
    
    })

    app.get('/fast', (req, res) => {
        res.send('this was fast')
    })
    
    app.listen(3000)   
}
