const http = require('http');
 
const fs=require('fs')
const root=__dirname;


function errorPage(res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>OOPS!! the requested page is not found</h1>");    
    res.write("<hr>");    
    res.write("&copy;CHG and Co.");
    res.end();    
        
        
}
function displayPage(url,res){
    let filename =root+ url+ ".html"
    if(url=="/")
        filename=root+ "/UserRegistration.html"
    fs.createReadStream(filename).pipe(res)
}
 
const server =http.createServer((req,res)=>{
    switch(req.url){
        case '/favicon.ico':
            res.end();
            break;
        case "/Register":
            res.write(JSON.stringify(req))
            res.write("Registration is complete")
            res.end();
            break;
        case '/':
            displayPage(req.url,res)

        //res.write("<h1>User registration form</h1>");    
            //res.end();
            break;
        case "/Home":
            res.write("<h1>Home page of my website</h1>");
            res.end();
            break;
        default:
            errorPage(res);    
            break;
    }
})
server.listen(1238);