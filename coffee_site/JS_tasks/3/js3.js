btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
inputNameElement = document.querySelector(".name");
inputSurnameElement = document.querySelector(".surname");

btnElement.addEventListener("click", function(){
    resultElement.innerHTML = "Ответ: Здравствуйте, " + inputNameElement.value + " " + inputSurnameElement.value + "!"
});