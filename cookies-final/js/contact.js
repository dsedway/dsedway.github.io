let fname = "";

// function for the greet
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    // show the result!
    greetParagraph.innerHTML = "Thank you for signing up " + fname + " " + lname + ". We will be sending a confirmation E-Mail shortly to " + email + "!";

}


let lname = "";

// function for the greet
function order() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    orderitem1 = document.getElementById("orderitem1").value;
    orderitem2 = document.getElementById("orderitem2").value;
    let phone = document.getElementById("phone").value;

    // show the result!
    greetParagraph.innerHTML = "Your order of " + orderitem1 + " and " + orderitem2 + " will be ready soon. " + " You will receive a text message sent to " + phone + " when the order is ready! ";

}
