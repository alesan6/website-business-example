function sendMsg() {
    alert("Potwierdź wysłanie wiadomości")
}

var submitButton = document.querySelector("#msgBtn");
var errorMessage = document.querySelector("#error-message");
var successMessage = document.querySelector("#success-message");
var inputEmail = document.getElementById("inputEmail");
var inputText = document.getElementById("inputText");
var messageArray = [];

submitButton.addEventListener("click",function(e){
    if(inputEmail.value.indexOf("@")==-1){
        messageArray.push("<p>Adres e-mail jest niepoprawny</p>");
    }
    if(inputText.value.length<4){
        messageArray.push("<p>Twoja wiadomość jest za krótka</p>");
    }
    if(messageArray.length >0){
        e.preventDefault();
        for(var i = 0; i<messageArray.length;i++){
            errorMessage.innerHTML += messageArray[i];
        }
    } else {
        successMessage.innerHTML="Wiadomość wysłana.";
  }

});
