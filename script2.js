let btn=document.getElementById("btn1");
btn.addEventListener("click",call);
let change=document.getElementById("cham");
change.style.display="none"
function call()
{
let pass=document.getElementById("password").value;
if(pass.length>8)
{
    event.preventDefault();
    change.style.display="block"
    btn.style.display="none"
}
else{
    alert("your password is not match")
}
}