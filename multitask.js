const https = require('https')
const crypto = require('crypto')
const start = Date.now()
const fs = require('fs')

 const doHash = () => {
    crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
        console.log("Hash", Date.now() - start)
    })
 }

const doRequest = () => {

https.get('https://www.google.com', (res) => {
    res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start)
        }) 
}).end()

}

doRequest()

fs.readFile('mulitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()