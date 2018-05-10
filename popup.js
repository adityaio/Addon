function open(url)
{
browser.tabs.create({url:url});
}
document.addEventListener("click",(e)=>{
if(e.target.id==="z"){
open("https://www.iiit-bh.ac.in/");
}
else if(e.target.id==="y"){
open("https://hib.iiit-bh.ac.in/Hibiscus/Login/?client=iiit");
}
 else if(e.target.id==="x"){
open("http://placement.iiit-bh.ac.in/");
}
else if(e.target.id==="v"){
open("http://iiit-bh.blogspot.in/");
}
});