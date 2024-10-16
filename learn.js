
function increaseCount(){

    
}

let buttonTag = document.getElementById("button-tag")
console.log(buttonTag)
buttonTag.addEventListener('click',function(){

let number=document.getElementById("h2")
number.innerHTML=Number(number.innerHTML)+1
console.log("Count increased by 1")
}
)

let password = "Weisbaden";


if(password.length>=8){
    console.log("Your account has been made");
}
else {
    console.log("password must be 8 characters or more");
}
if(password.length> 8 && password.charAt(password.length -1)!=='e'){

}else{
    console.log("password must be more than 8 characters and should not end with 'e'")
    
}
if (password.includes('E') || password.includes('e')){
    console.log("password contains 'E' or 'e'");

}
else{
    console.log("password doesn't contains 'E' or 'e'");
}


let actor2 = {
   name : "RajKumar",
   age : 49,
   movies: ("Guns and Gulabs', 'Ludo' and 'First Case")
}
if (actor2.movies){
    console.log("Actor has been in some movie");
}
    else{
        console.log("Actor has not been in movies");
    }



