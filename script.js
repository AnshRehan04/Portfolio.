var a=document.getElementById("input-field");
var b=document.getElementById("email");
var c=document.getElementById("sub");
var d=document.getElementById("msg");
var e=document.getElementById("form")
var btn1=document.getElementById("btn")
// var f=document.getElementsByClassName("right-div");
// function getdata(){
//     if(a=="" || b=="" ||c=="" || d==""){
//         alert("Enter fields");
//         return false;
//     }
//     else{
//         true;
//         alert("Thank You");
//     }
// }

// var e=document.getElementById("dark");

// e.addEventListener("click",()=>{
//     f.style.backgroundColor="white";
// })

btn1.addEventListener("click",k=>{
    k.preventDefault();
    validateinputs();
});

const validateinputs=()=>{
    const uservalue=a.value.trim();
    const emailvalue=b.value.trim();
    const subject=c.value.trim();
    const msg=d.value.trim();
    if(uservalue==='' || emailvalue===''|| subject===''||msg===''){
        // setError(a,"Username is required")
        
        alert("Enter fields ");
    }
    else{
        alert("Thanks");
    }
}