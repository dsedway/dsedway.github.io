let fname = "";

// function for the greet
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";

}

// function to trivia game
function trivia() {
    // trivia answer
    let triviaAnswer = document.getElementById("trivia-answer")
    // get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // decide what to "print"
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }

}