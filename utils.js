function createAndAppendPizza(el_pizza) {
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
  pizzaPrice.after(buttonPizzaAdd);

  let add = document.createElement('div');
  buttonPizzaAdd.append(add);
  add.innerHTML = '+';

  let pizzaAdd = document.createElement('div');
  add.after(pizzaAdd);
  pizzaAdd.innerHTML = 'Добавить';

  document.querySelector('.list_pizza').append(pizza);
}

export default createAndAppendPizza;