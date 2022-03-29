import pizzaSet from './data/pizzaSet.js';
import createAndAppendPizza from './utils.js';

for (let i = 0; i < pizzaSet.length; i++){
  createAndAppendPizza(pizzaSet[i]);
}

let forms = document.querySelectorAll('.options_pizza');
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