const userSurname = document.querySelector('[name="surname"]');//получите элемент input с фамилией(*)
const userName =  document.querySelector('[name="name"]');//получите элемент input с именем(*)

const checkboxes= document.querySelectorAll('[class="checkbox"]');//получите элементы checkbox с товарами goods(*)
const numbers =  document.querySelectorAll('[type="number"]');//получите элементы input с кол-вом(*)

const btn = document.querySelector(".btn");//получите элемент button(*)
const resultElem = document.querySelector(".sum");//получите элемент span для итоговой суммы

const total = document.querySelector(".total")
sum = 0

checkboxes.forEach((item, i) => {

    item.onchange = () => {
        let currentsItems = +numbers[i].value;
        let currentValue = currentsItems * item.value;
        if(item.checked) {
            if(!currentsItems) {
                numbers[i].value = 1;
                sum += +item.value;
            } else {
                sum += currentValue;
            }
        } else {
            numbers[i].value = 0;
            sum -= currentValue;
        }
        
        total.innerHTML = `Итого: ${sum} р.`;
    }
})

numbers.forEach((item, i) => {
    item.onfocus = () => {
        let currentValue = +item.value * checkboxes[i].value;

        item.onblur = () => {
            if(/^0\d+|^$|[^\d]/.test(item.value)) {
                alert('ВНИМАНИЕ! ДАННЫЕ ВВЕДЕНЫ НЕКОРРЕКТНО!');
                item.value = 0;
                item.focus();
            }

            if (checkboxes[i].checked) {
                let nextValue = item.value * checkboxes[i].value;
                sum += nextValue - currentValue;
                total.innerHTML = `Итого: ${sum} р.`;
            }
        }
    }  
})

btn.addEventListener("click", function(){
    alert(`Заказчик: ${userName.value} ${userSurname.value}\n${total.innerHTML}`);
    });

// ________________________________________________________________
// //создайте переменную для хранения итоговой суммы (*)
// let total = 0


// //этот объект нужен для хранения количества каждого товара
// //либо, вы можете создать переменные/массив для хранения значений 
// const countGoods = { 
//     "expresso": 0,
//     "americano": 0,
//     "latte": 0,
//     "capuchino": 0,
//     "chocolate_muffin": 0,
//     "blueberry_muffin": 0,
//     "apple_tart": 0
// }

// //этот объект нужен для хранения цены каждого товара
// //т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
// //либо, вы можете создать переменные/массив для хранения значений
// const choicePriceGoods = { 
//     "expresso": 0,
//     "americano": 0,
//     "latte": 0,
//     "capuchino": 0,
//     "chocolate_muffin": 0,
//     "blueberry_muffin": 0,
//     "apple_tart": 0
// }

// //создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
// function sum_total(){

// };


// //для каждого элемента input с кол-вом нужно повесить событие на изменение change, 
// //по которому в объекте должны меняться значения на значение в input
// countElements.forEach(elem => {
    
// })

// //для каждого элемента checkbox нужно повесить событие на изменение change, 
// //по которому в объекте должны меняться значение на цену, если чекбокс выбран
// //или обратно на 0, если чекбокс не выбран
// goodsElements.forEach(product => {
//     for (const countElement of countElements){
//         countElement.addEventListener('change', (event) => {
//             if (event.currentTarget.checked) {
//                 if(parseInt(countElement.value) != 0){
//                     total += parseInt(countElement.value) * parseInt(goodsElement.value)
//                 };
//                 alert('checked');
//             } else {
//                 console.log(countElement.value + 'not checked');
//                 resultElem.textContent = `${total} руб`;
//             }
//           });
//     }
// });

// btn.addEventListener("click", function(){
//     total = 0; 
//     for (const goodsElement of goodsElements){
//         if(goodsElement.checked){
//             total += parseInt(goodsElement.value);
//         };
//         resultElem.textContent = `${total} руб`;
//     };
    // alert(`Заказчик: ${userName.value} ${userSurname.value}\nИтого: ${total}р. `);
// });//по клику на кнопку должен появиться alert с текстом
// //(*)для выбравших способ 1 или 2 именно внутри данного события будет происходить подсчет итоговой суммы,
// //вам нужно перебрать все элементы checkbox и input в цикле
