var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#button-translate");
buttonTranslate.addEventListener("click", buttonClickHandler)

var translateOutput = document.querySelector("#translate-output");

var serverurl = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslationURL(input){
    return serverurl+"?"+"text= "+input 
}

function errorHandler(error)
{console.log("Error Occured!");
alert("Something went wrong! please try again");
}


