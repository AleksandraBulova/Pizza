import pizzaSet from './data/pizzaSet.js';
import {createAndAppendPizza} from './utils.js';
import {createBasketPizza} from './utils.js';

let cartPizzas = [];

for (let i = 0; i < pizzaSet.length; i++){
  createAndAppendPizza(pizzaSet[i]);
}

const forms = document.querySelectorAll('.options_pizza');

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('change', (event) => {
    const pizzaElement = event.path.find(el => el.className === 'pizza');
    const pizzaId = Number(pizzaElement.id);
    const currentPizza = pizzaSet.find(el => el.id === pizzaId);
    if (event.target.value === 'traditional' || event.target.value === 'thin'){
      currentPizza.activeDough = event.target.value;
    } else {
      currentPizza.activeSize = Number(event.target.value);
    }
    pizzaElement.querySelector('.price').innerHTML = `${currentPizza.dough[currentPizza.activeDough][currentPizza.activeSize]} ₽`;
  });
}

const buttonAdd = document.querySelectorAll('.button_pizza_add');

for (let i = 0; i < buttonAdd.length; i++) {
  buttonAdd[i].addEventListener('click', (event) => {
    const pizzaElement = event.path.find(el => el.className === 'pizza');
    const pizzaId = Number(pizzaElement.id);
    const currentPizza = pizzaSet.find(el => el.id === pizzaId);
    cartPizzas.push(currentPizza);

    createBasketPizza(currentPizza);

    const removeButton = document.querySelectorAll('.remove_pizza')[document.querySelectorAll('.remove_pizza').length - 1];

    removeButton.addEventListener('click', (event) => {
      const pizzaElem = event.path.find(el => el.className === 'line');
      cartPizzas = cartPizzas.filter(el => el.id !== +pizzaElem.id);

      pizzaElem.parentNode.removeChild(pizzaElem);

      document.querySelector('.number_pizzas').innerHTML = `${cartPizzas.length} шт.`;
      document.querySelector('.number_pizza_basket').innerHTML = cartPizzas.length;

      const resultSum = cartPizzas.reduce((sum, el) => sum + el.dough[el.activeDough][el.activeSize], 0);
      document.querySelector('.grand_total').innerHTML = `${resultSum} ₽`;
      document.querySelector('.basket_money').innerHTML = `${resultSum} ₽`;
    })

    document.querySelector('.number_pizzas').innerHTML = `${cartPizzas.length} шт.`;
    document.querySelector('.number_pizza_basket').innerHTML = cartPizzas.length;

    const resultSum = cartPizzas.reduce((sum, el) => sum + el.dough[el.activeDough][el.activeSize], 0);
    document.querySelector('.grand_total').innerHTML = `${resultSum} ₽`;
    document.querySelector('.basket_money').innerHTML = `${resultSum} ₽`;
  })
}

