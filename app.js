window.onload = function() {
  localStorage.setItem("demoUser", "Mango")
  localStorage.setItem("demoEmail","mango123@hotmail.com")
  localStorage.setItem("demoPassword","mango123")
  checkuser()
  checkout()
}

let demoEmail = localStorage.getItem("demoEmail")
let demoPassword = localStorage.getItem("demoPassword")



let theCard = document.querySelector(".thecard");
const createAccount = document.querySelector("#creat");


createAccount.addEventListener("click", function() {
  theCard.style.transform = "rotateY(180deg)";
})

function goBack() {
  theCard.style.transform = "rotateY(0deg)"
}



var userName = document.querySelector(".userName");
var Email = document.querySelector(".Email");
var Password = document.querySelector(".Password");

function saveData() {
  localStorage.setItem("user", userName.value)
  localStorage.setItem("userEmail", Email.value)
  localStorage.setItem("userPassword", Password.value)
}



function login() {
  var enterEmail = document.getElementById("enterEmail").value;
  var enterPassword = document.getElementById("enterPassword").value;

  var enterEmailInput = document.getElementById("enterEmail");
  var enterPasswordInput = document.getElementById("enterPassword");
  
  var getEmail = localStorage.getItem("userEmail")
  var getPassword = localStorage.getItem("userPassword")

  if(enterEmail === getEmail || enterEmail === demoEmail) {
    if(enterPassword === getPassword || enterPassword === demoPassword) {
      window.location.href = "index2.html"
    }
    else {
      enterPasswordInput.style.border = "1px solid red"
    }
  }
  else {
    enterEmailInput.style.border = "1px solid red"
  }
}


let card = document.querySelector(".cardcontainer")
let forgot = document.querySelector(".forgotcontainer")

function recoverPassword() {
  if(card.style.display = "block") {
    card.style.display = "none"
    forgot.style.display = "flex"
  }
}

function backtologin() {
  if(forgot.style.display = "block") {
    forgot.style.display = "none"
    card.style.display = "flex"
  }
}





function sendEmail() {
  
  let forgotInput = document.getElementById("forgotInput").value;
  let emailSend = document.getElementById("emailSend")

  if(forgotInput === "") {
    emailSend.innerHTML = "Please enter an Email"
  }
  else if(forgotInput.indexOf("@") === -1) {
    emailSend.innerHTML = "Please enter a valid Email"
  }
  else {
    emailSend.innerHTML = `"Recovery Email has been send to ${forgotInput}"`
  }
}




function checkuser() {
  document.getElementById("userwelcome").innerHTML = localStorage.getItem("user")

  if(localStorage.getItem("user") === null) {
    document.getElementById("userwelcome").innerHTML = localStorage.getItem("demoUser")
  }
}


function buytickets() {
  window.location.href = "buytickets.html"
}



function getRadioValue() {
  var radio = document.getElementsByName('radiopass');
  let showbtn = false;

  let paybtn = document.querySelector(".paymentbutton");


  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      showbtn = true
    }
  }

  if(showbtn) {
    paybtn.style.display = "flex"
  }
}
  

function payment() {
  var radio = document.getElementsByName('radiopass');
  let price;

  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      price = radio[i].value
    }
  }
  localStorage.setItem("whichpass", price)
  
}


function checkout() {
let quantityEl = document.getElementById("quantity");
let amountEl = document.getElementById("amount");
let taxesEl = document.getElementById("taxes");
let passtotalEl = document.getElementById("passtotal");

  quantityEl.addEventListener("change", function() {
  let quantity = parseInt(quantityEl.value);

  let whichpass = parseInt(localStorage.getItem("whichpass"));
  let amount = whichpass * quantity;
  let taxes = Math.round(amount/4);
  let passtotal = amount + taxes;

  amountEl.innerHTML = "$" + amount;
  taxesEl.innerHTML = "$" + taxes;
  passtotalEl.innerHTML = "$" + passtotal;
});

  quantityEl.dispatchEvent(new Event("change"));


  if(localStorage.getItem("whichpass") == "129") {
    document.getElementById("passname").innerHTML = "BRONZE PASS"
  }
  else if(localStorage.getItem("whichpass") == "177") {
    document.getElementById("passname").innerHTML = "SILVER PASS"
  }
  else if(localStorage.getItem("whichpass") == "204") {
    document.getElementById("passname").innerHTML = "GOLD PASS"
  }
  else {
    document.getElementById("passname").innerHTML = "PLATINUM PASS"
  }
}
