let button = document.getElementById("btn");

button.addEventListener("click" , () =>{
   // alert("I was clicked")
   document.querySelector(".box").innerHTML = "<b>Yes you clicked good luck</b>";
})

button.addEventListener("dblclick" , () =>{
   document.querySelector(".box").innerHTML = "<b>Yes you clicked good luck</b>";
})

button.addEventListener("contextmenu" , () =>{
   document.querySelector(".box").innerHTML = "<b>Dont hack us by right click on button</b>";
})

document.addEventListener("keydown" , (e) =>{
   console.log(e.key, e.keyCode);
})

//There are lot of more events like 'click'