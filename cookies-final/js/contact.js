function greet() {

    let greetParagraph = document.getElementById("greet");


    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    let age = document.getElementById("age").value;


    greetParagraph.innerHTML = "Greetings " + fname + lname + "We have sent We have sent a text message to" + phone + "!";

}