import { pizzesData } from './data.js';
import { createUIPizza } from './utils.js';
import { addPizzaToUI } from './utils.js';
import { removePizzaFromUI } from './utils.js';

function Pizza(id, name, img, type, dough) {
  this.id = id;
  this.name = name;
  this.img = img;
  this.type = type;
  this.dough = dough,
  this.activeDough = 'thin',
  this.activeSize = 26
};

export const pizzes = pizzesData.map(el => new Pizza(el.id, el.name, el.img, el.type, el.dough));


let addedToUIPizzes = [];

window.addEventListener('load', function() {
  for (let i = 0; i < pizzes.length; i++){
    const createdPizza = createUIPizza(pizzes[i]);
    addPizzaToUI(createdPizza);
    addedToUIPizzes.push(createdPizza);
  }
})

const buttonFilter = document.querySelectorAll('.button_filter');

for (let i = 0; i < buttonFilter.length; i++) {
  buttonFilter[i].addEventListener('click', function(event) {
    buttonFilter.forEach(el => {
      el.classList.remove('active');
    })
    buttonFilter[i].classList.add('active');

    const typePizza = event.target.id;

    const removeAllPizzes = () => {
      for(let i = 0; i < addedToUIPizzes.length; i++) { 
        removePizzaFromUI(addedToUIPizzes[i]);
      }
      addedToUIPizzes = [];
    }

    const cratePizzes = (pizzes) =>{
      for (let i = 0; i < pizzes.length; i++){
        const createdPizza = createUIPizza(pizzes[i]);
        addPizzaToUI(createdPizza);
        addedToUIPizzes.push(createdPizza);
      }
    }

    let filteredPizzes = [];

    switch(typePizza){
      case 'all':
        removeAllPizzes();
        cratePizzes(pizzes);
        break;
      case 'meat':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break;
      case 'seafood':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break;  
      case 'cheese':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break; 
      case 'cheese':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break; 
      case 'spicy':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break; 
      case 'closed':
        removeAllPizzes();
        filteredPizzes = pizzes.filter(el => el.type.includes(typePizza));
        cratePizzes(filteredPizzes);
        break; 
      default:
        removeAllPizzes();
        cratePizzes(pizzes);
    }
  })
}