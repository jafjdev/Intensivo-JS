
var h1 = document.getElementById("titulo");
console.log(h1);

h1.innerHTML = "A un nuevo texto";
h1.style.color = "red";
h1.style.background = "blue";

var boton = document.getElementById("boton");

/*

    boton.onclick = function(){
        h1.style.color = "olive";
    }

*/

boton.addEventListener('mouseover',function(){
    console.log('me diste un click');
})