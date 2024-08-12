let button1 = document.getElementById('aqua');
let button2 = document.getElementById('teal');
let button3 = document.getElementById('pink');
let button4 = document.getElementById('purple');
let button5 = document.getElementById('colorless');
let divRef= document.getElementById("color-display");

button1.onclick = function(event){
    let input = event.target.id;
    divRef.style.backgroundColor = input;
    divRef.innerHTML = "aqua";
}
button2.onclick = function(event){
    let input = event.target.id;
    divRef.style.backgroundColor = input;
    divRef.innerHTML = "teal";
}
button3.onclick = function(event){
    let input = event.target.id;
    divRef.style.backgroundColor = input;
    divRef.innerHTML = "pink";
}
button4.onclick = function(event){
    let input = event.target.id;
    divRef.style.backgroundColor = input;
    divRef.innerHTML = "purple";
}
button5.onclick = function(event){
    let input = event.target.id;
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
}

let displayButton = document.getElementById("display-btn");
displayButton.onclick = function() {
    if (divRef.style.display != "none") {
        divRef.style.display = "none";
        displayButton.innerHTML = "show";
        divRef.style.textAlign = "center";
        divRef.style.alignItems="center";
    }

    else {
        divRef.style.display = "block";
        displayButton.innerHTML = "hide";
        divRef.style.textAlign = "center";
        divRef.style.display="flex";
        divRef.style.alignItems="center";
    }
}