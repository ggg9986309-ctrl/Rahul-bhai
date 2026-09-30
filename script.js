const $=s=>document.querySelector(s), scene=$("#loginScene"), profile=$("#profile"), toast=$("#toast");
for(let i=0;i<25;i++){let p=document.createElement("span");p.className="particle";p.style.left=(5+Math.random()*90)+"%";p.style.top=(8+Math.random()*85)+"%";p.style.setProperty("--x",(Math.random()*50-25)+"px");p.style.setProperty("--y",(Math.random()*70-35)+"px");p.style.setProperty("--d",(2+Math.random()*4)+"s");p.style.setProperty("--delay",(-Math.random()*4)+"s");$("#particles").appendChild(p)}
function msg(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
function openProfile(n){$("#name").textContent=n||"Kiran Jadhav";scene.classList.add("hidden");profile.classList.remove("hidden")}
$("#login").addEventListener("submit",e=>{e.preventDefault();let n=$("#username").value.trim(),em=$("#email").value.trim(),pw=$("#password").value;if(!n||!em||pw.length<4)return msg("Please enter valid login details.");localStorage.setItem("kiranSession",JSON.stringify({name:n,email:em}));msg("Login successful");setTimeout(()=>openProfile(n),350)});
document.querySelectorAll(".social").forEach(b=>b.onclick=()=>{msg(b.dataset.name+" demo login");setTimeout(()=>openProfile("Kiran Jadhav"),350)});
$("#logout").onclick=()=>{localStorage.removeItem("kiranSession");profile.classList.add("hidden");scene.classList.remove("hidden");msg("Logged out")};
let saved=JSON.parse(localStorage.getItem("kiranSession")||"null");if(saved)openProfile(saved.name);
