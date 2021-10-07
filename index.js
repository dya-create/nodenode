const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    console.log(req.url, req.method);
//set header content type
res.setHeader('Content-Type', 'text/html');
// res.write('Welcome to ckmobile');
fs.readFile('index.html', (err, data) => {
if (err) {
    console.log(err)
    res.end()
} else {
    res.end(data);
}
})
})
const port = process.env.PORT || 3000
server.listen(port);
console.log('listening for request on port 3000');





