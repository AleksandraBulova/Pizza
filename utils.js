export function createAndAppendPizza(el_pizza) {

  let pizza = document.createElement('div');
  pizza.className = 'pizza';
  pizza.id = el_pizza.id;

  let pizzaImg = document.createElement('img');
  pizzaImg.src = el_pizza.img;
  pizzaImg.alt = 'pizza';
  pizza.append(pizzaImg);

  let namePizza = document.createElement('h3');
  pizzaImg.after(namePizza);
  namePizza.innerHTML = el_pizza.name;

  let pizzaOptions = document.createElement('form');
  pizzaOptions.className = 'options_pizza';
  namePizza.after(pizzaOptions);

  let pizzaDough = document.createElement('div');
  pizzaDough.className = 'dough_pizza';
  pizzaOptions.append(pizzaDough);

  let thinPizza = document.createElement('input');
  thinPizza.type = 'radio';
  thinPizza.id = `radio-dough-${el_pizza.id}-1`;
  thinPizza.name = 'radios-dough';
  thinPizza.value = 'thin';
  thinPizza.checked = el_pizza.activeDough === 'thin';
  pizzaDough.append(thinPizza);

  let thinDough = document.createElement('label');
  thinDough.htmlFor = `radio-dough-${el_pizza.id}-1`;
  thinPizza.after(thinDough);
  thinDough.innerHTML = 'тонкое';

  let traditionalPizza = document.createElement('input');
  traditionalPizza.type = 'radio';
  traditionalPizza.id = `radio-dough-${el_pizza.id}-2`;
  traditionalPizza.name = 'radios-dough';
  traditionalPizza.value = 'traditional';
  traditionalPizza.checked = el_pizza.activeDough === 'traditional';
  thinDough.after(traditionalPizza);

  let traditionalDough = document.createElement('label');
  traditionalDough.htmlFor = `radio-dough-${el_pizza.id}-2`;
  traditionalPizza.after(traditionalDough);
  traditionalDough.innerHTML = 'традиционное';

  let pizzaSize = document.createElement('div');
  pizzaSize.className = 'size_pizza';
  pizzaDough.after(pizzaSize);

  let littlePizza = document.createElement('input');
  littlePizza.type = 'radio';
  littlePizza.id = `radios-size-${el_pizza.id}-1`;
  littlePizza.name = 'radios-size';
  littlePizza.value = 26;
  littlePizza.checked = el_pizza.activeSize === 26;
  pizzaSize.append(littlePizza);

  let littleSize = document.createElement('label');
  littleSize.htmlFor = `radios-size-${el_pizza.id}-1`;
  littlePizza.after(littleSize);
  littleSize.innerHTML = '26 см.';

  let middlePizza = document.createElement('input');
  middlePizza.type = 'radio';
  middlePizza.id = `radios-size-${el_pizza.id}-2`;
  middlePizza.name = 'radios-size';
  middlePizza.value = 30;
  middlePizza.checked = el_pizza.activeSize === 30;
  littleSize.after(middlePizza);

  let middleSize = document.createElement('label');
  middleSize.htmlFor = `radios-size-${el_pizza.id}-2`;
  middlePizza.after(middleSize);
  middleSize.innerHTML = '30 см.';

  let bigPizza = document.createElement('input');
  bigPizza.type = 'radio';
  bigPizza.id = `radios-size-${el_pizza.id}-3`;
  bigPizza.name = 'radios-size';
  bigPizza.value = 40;
  bigPizza.checked = el_pizza.activeSize === 40;
  middleSize.after(bigPizza);

  let bigSize = document.createElement('label');
  bigSize.htmlFor = `radios-size-${el_pizza.id}-3`;
  bigPizza.after(bigSize);
  bigSize.innerHTML = '40 см.';

  let pizzaPriceAddition = document.createElement('div');
  pizzaPriceAddition.className = 'price_addition_pizza';
  pizzaOptions.after(pizzaPriceAddition);

  let pizzaPrice = document.createElement('div');
  pizzaPrice.className = 'price_pizza';
  pizzaPriceAddition.append(pizzaPrice);

  let pizzaText = document.createElement('div');
  pizzaPrice.append(pizzaText);
  pizzaText.innerHTML = 'от';

  let price = document.createElement('div');
  price.className = 'price';
  pizzaText.after(price);
  price.innerHTML = `${el_pizza.dough[el_pizza.activeDough][el_pizza.activeSize]} ₽`;

  let buttonPizzaAdd = document.createElement('button');
  buttonPizzaAdd.className = 'button_pizza_add';
  pizzaPrice.after(buttonPizzaAdd);

  let add = document.createElement('div');
  buttonPizzaAdd.append(add);
  add.innerHTML = '+';

  let pizzaAdd = document.createElement('div');
  add.after(pizzaAdd);
  pizzaAdd.innerHTML = 'Добавить';


  document.querySelector('.list_pizza').append(pizza);
}


export function createBasketPizza(el_basket_pizza) {

  let linePizza = document.createElement('div');
  linePizza.className = 'line';
  linePizza.id = el_basket_pizza.id;

  let typePizza = document.createElement('div');
  typePizza.className = 'type_pizza';
  linePizza.append(typePizza);

  let pizzaBasketImg = document.createElement('img');
  pizzaBasketImg.src = `/assets/images/mini_cheeseburger_pizza.png`;
  pizzaBasketImg.alt = 'pizza';
  typePizza.append(pizzaBasketImg);

  let descriptionPizza = document.createElement('div');
  descriptionPizza.className = 'description_pizzaa';
  pizzaBasketImg.after(descriptionPizza);

  let nameBasketPizza = document.createElement('h2');
  descriptionPizza.append(nameBasketPizza);
  nameBasketPizza.innerHTML = el_basket_pizza.name;

  let characteristicsPizza = document.createElement('div');
  characteristicsPizza.className = 'characteristics_pizza';
  nameBasketPizza.after(characteristicsPizza);
  characteristicsPizza.innerHTML = `${el_basket_pizza.activeDough === 'thin' ? 'тонкое' : 'традиционное'},
  ${el_basket_pizza.activeSize} см.`;

  let changesPizza = document.createElement('div');
  changesPizza.className = 'changes_pizza';
  linePizza.append(changesPizza);

  let minusPizza = document.createElement('button');
  changesPizza.append(minusPizza);
  minusPizza.innerHTML = `-`;

  let numberPizza = document.createElement('div');
  numberPizza.className = 'number_pizza';
  minusPizza.after(numberPizza);
  numberPizza.innerHTML = `1`;

  let plusPizza = document.createElement('button');
  numberPizza.after(plusPizza);
  plusPizza.innerHTML = `+`;

  let costPizza = document.createElement('div');
  costPizza.className = 'cost_pizza';
  linePizza.append(costPizza);
  costPizza.innerHTML = `${el_basket_pizza.dough[el_basket_pizza.activeDough][el_basket_pizza.activeSize]} ₽`;

  let removePizza = document.createElement('button');
  removePizza.className = 'remove_pizza';
  linePizza.append(removePizza);
  removePizza.innerHTML = `x`;
    
  document.querySelector('.pizza_selection').append(linePizza);
}