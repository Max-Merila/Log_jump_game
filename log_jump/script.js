var character = document.getElementById("character"); //sets character to the element id character
document.addEventListener("click", jump); // an event listener that starts the function jump

function jump(){
    character.classList.add("animate");
    setTimeout(removejump,300); //300ms = length of animation
}; //function jump adds animate class to the character div

if(character.classList == "animate"){return;} // prevents glitch that happens when you click while the character is currently jumping.

function removeJump(){
    character.classList.remove("animate");
} //timeout for the jump function

