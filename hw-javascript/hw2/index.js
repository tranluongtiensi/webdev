var n = document.querySelectorAll("button").length;
for (var i = 0; i < n; i++) {

    // Button Press
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var innerHTML = this.innerHTML;
        makeSound(innerHTML);
        buttonAnimation(innerHTML);
    })

    // Key Press
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    })

    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "b":
                var crash2 = new Audio("sounds/crash2.mp3");
                crash2.play();
                break;
            case "n":
                var crash3 = new Audio("sounds/crash3.mp3");
                crash3.play();
                break;
            case "m":
                var snare2 = new Audio("sounds/snare2.mp3");
                snare2.play();
                break;
            default:
                break;
        }
    }

    function buttonAnimation(buttonKey)
    {
        var buttonActive = document.querySelector("." + buttonKey);
        buttonActive.classList.add("pressed");
        setTimeout(function(){
            buttonActive.classList.remove("pressed");
        }, 400);
    }

    
}