//To handle static pages of UR server...
const http = require('http');
const fs = require('fs');
const parse = require("url").parse;
//This object is used to extract the Querystring info or POSTED data from the Browser into the server...

const root = __dirname;//root directory of ur application...

function errorPage(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>OOPS!! The Page U R looking is not with us!!!!</h1>");
    res.write("<hr/>");
    res.write("&copy; Phaniraj-Training.Inc-2020");
    res.end();
}

//This should be the function to display all static html pages....
function displayPage(url, res){
    let filename = root + url + ".html";
    if(url == "/")//to handle root requests...
        filename = root + "/UserRegistration.html";
    fs.createReadStream(filename).pipe(res);
    //pipe method of the Stream object will push the reading data into the Response object which will eventually display on the Browser...
}

const server = http.createServer((req, res)=>{
    const query = parse(req.url).query;//QueryString information...
    if(query != null){
        let obj = parse(req.url, true).query;//this converts the QUERYSTRING to an object..
        let strData = `The Name ${obj.uname} from ${obj.uaddress}`;
        res.write(strData);
        res.end();
        return;
    }

    switch (req.url) {
        case '/favicon.ico':
            res.end();
            break;
        case "/Register":
            res.write("Registration is complete!!!!");
            res.end();
            break;
        case '/':
            displayPage(req.url, res);
            break;
        case "/Home":
            res.write("<h1>Home Page of my WebSite!!!</h1>");
            res.end();
            break;
        default:
            errorPage(res);
            break;
    }
})

server.listen(1236);//port no should be unique to the OS....