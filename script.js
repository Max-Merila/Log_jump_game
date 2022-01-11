var character = document.getElementById("character"); //sets character to the element id character
document.addEventListener("click", jump); // an event listener that starts the function jump

function jump(){
    if(character.classList == "animate"){return;} // prevents glitch that happens when you click while the character is currently jumping.
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
}; //function jump adds animate class to the character div

function removeJump(){
    character.classList.remove("animate");
} //timeout for the jump function

var block = document.getElementById("block"); //created the variable block in js

function checkDead(){ //function to see if block has hit character
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game Over");
    }

}

setInterval(checkDead, 10);