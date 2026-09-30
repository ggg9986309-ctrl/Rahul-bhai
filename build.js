const fs=require("fs"),path=require("path");
const root=__dirname, out=path.join(root,"dist");
if(fs.existsSync(out)) fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for(const f of ["index.html","style.css","script.js"]){
  fs.copyFileSync(path.join(root,f),path.join(out,f));
}
console.log("Build complete: dist/");
