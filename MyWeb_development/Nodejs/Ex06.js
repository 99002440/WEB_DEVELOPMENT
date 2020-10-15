//http module is one popular module in nodejs used for handling http requests from the users. users sends the requests thro browsers using http protocols.
const http = require('http'); 

const requests = [];

const server = http.createServer((req, res)=>{
    //res.write("Hello world");
    if(req.url != 'favicon.ico'){
        requests.push(req.url);
        for (const url of requests) {
            res.write(url)
        }
        res.end();
    }
})

server.listen(1234);
