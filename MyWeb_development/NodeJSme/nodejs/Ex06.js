//http module
const http=require('http')
const requests=[]

const server=http.createServer((req,res)=>{
    req.rawListeners("hello world")
    res.end()
})
server.listen(1234)