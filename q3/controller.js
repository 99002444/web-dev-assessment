const http= require("http")
const fs= require("fs")
const root = __dirname
const parse = require("url").parse

function errorPage(res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Page not found</h1>")
    res.end()
}

function displayPage(req,res){
    if(req.method =="POST"){
        req.on("data",(inputs)=>{
            let body=""
            body+=inputs
            res.end(body)
        })
    }
    const filename= root+ req.url +".html"
    if(url=="/")
        filename= root+"/UserRegistration.html"
    fs.createReadStream(filename).pipe(res)
}

const server = http.createServer((req,res)=>{
    switch(req.url){
 
        case "/Register":
            res.write(JSON.stringify(req))
            res.write("<h1>Registration is complete</h1>") 
            
            res.end()
            break
        case "/":
            displayPage(req.url,res)
        default:
            errorPage(res)
            break;
    }
})

server.listen(1234)



