const http=require("http"),fs=require("fs"),path=require("path");
const port=process.env.PORT||10000, dir=path.join(__dirname,"dist");
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"application/javascript; charset=utf-8",".json":"application/json"};
http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split("?")[0]);
  if(u==="/") u="/index.html";
  let file=path.join(dir,u);
  if(!file.startsWith(dir)) return res.writeHead(403).end();
  fs.readFile(file,(e,data)=>{
    if(e) return fs.readFile(path.join(dir,"index.html"),(e2,d)=>{if(e2)return res.writeHead(404).end("Not found");res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});res.end(d)});
    res.writeHead(200,{"Content-Type":types[path.extname(file)]||"application/octet-stream"});
    res.end(data);
  });
}).listen(port,()=>console.log("Kiran web running on port "+port));
