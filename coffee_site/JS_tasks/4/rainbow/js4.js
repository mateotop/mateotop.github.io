function sum() {
    var sum = 0;
    for (i=0; i<arguments.length; i++) {
      sum += arguments[i];
    }
    return sum
  }

btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name="meal"]');

btnElement.addEventListener("click", function(){
    let selectedMealValues = 0;
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            selectedMealValues += parseInt(radioButton.value);
        }
        resultElement.textContent = `${selectedMealValues} руб`;
    }
});