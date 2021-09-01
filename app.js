var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#button-translate");
buttonTranslate.addEventListener("click", buttonClickHandler)

var translateOutput = document.querySelector("#translate-output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"
	

function getTranslationURL(input){
    return serverurl+"?"+"text= "+input 
}

function errorHandler(error)
{console.log("Error Occured!");
alert("Something went wrong! please try again");
}

function buttonClickHandler()
{
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        translateOutput.innerText = translatedText
    })

    .catch(errorHandler)
};


