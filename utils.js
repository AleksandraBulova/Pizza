import { pizzes } from './script.js';

let cartPizzesUI = [];
let cartPizzesData = [];

export function createUIPizza(pizza) {

  const pizzaContainer = document.createElement('div');
  pizzaContainer.className = 'pizza';
  pizzaContainer.id = pizza.id;
  pizzaContainer.type = pizza.type;

  const pizzaImg = document.createElement('img');
  pizzaImg.src = pizza.img;
  pizzaImg.alt = 'pizza';
  pizzaContainer.append(pizzaImg);

  const pizzaName = document.createElement('h3');
  pizzaImg.after(pizzaName);
  pizzaName.innerHTML = pizza.name;

  const pizzaOptionsHandler = (event) => {
    const pizzaElement = event.path.find(el => el.className === 'pizza');
    const pizzaId = Number(pizzaElement.id);
    const currentPizza = pizzes.find(el => el.id === pizzaId);
    if (event.target.value === 'traditional' || event.target.value === 'thin'){
      currentPizza.activeDough = event.target.value;
    } else {
      currentPizza.activeSize = Number(event.target.value);
    }
    pizzaElement.querySelector('.price').innerHTML = `${currentPizza.dough[currentPizza.activeDough][currentPizza.activeSize]} ₽`;
  }

  const pizzaOptions = document.createElement('form');
  pizzaOptions.className = 'options_pizza';
  pizzaName.after(pizzaOptions);
  pizzaOptions.addEventListener('change', pizzaOptionsHandler);

  const pizzaDough = document.createElement('div');
  pizzaDough.className = 'dough_pizza';
  pizzaOptions.append(pizzaDough);

  const thinOption = document.createElement('input');
  thinOption.type = 'radio';
  thinOption.id = `radio-dough-${pizza.id}-thin`;
  thinOption.name = 'radios-dough';
  thinOption.value = 'thin';
  thinOption.checked = pizza.activeDough === 'thin';
  pizzaDough.append(thinOption);

  const thinDough = document.createElement('label');
  thinDough.htmlFor = `radio-dough-${pizza.id}-thin`;
  thinOption.after(thinDough);
  thinDough.innerHTML = 'тонкое';

  const traditionalOption = document.createElement('input');
  traditionalOption.type = 'radio';
  traditionalOption.id = `radio-dough-${pizza.id}-traditional`;
  traditionalOption.name = 'radios-dough';
  traditionalOption.value = 'traditional';
  traditionalOption.checked = pizza.activeDough === 'traditional';
  thinDough.after(traditionalOption);

  const traditionalDough = document.createElement('label');
  traditionalDough.htmlFor = `radio-dough-${pizza.id}-traditional`;
  traditionalOption.after(traditionalDough);
  traditionalDough.innerHTML = 'традиционное';

  const pizzaSize = document.createElement('div');
  pizzaSize.className = 'size_pizza';
  pizzaDough.after(pizzaSize);

  const pizzaLittle = document.createElement('input');
  pizzaLittle.type = 'radio';
  pizzaLittle.id = `radios-size-${pizza.id}-26см`;
  pizzaLittle.name = 'radios-size';
  pizzaLittle.value = 26;
  pizzaLittle.checked = pizza.activeSize === 26;
  pizzaSize.append(pizzaLittle);

  const sizeLittle = document.createElement('label');
  sizeLittle.htmlFor = `radios-size-${pizza.id}-26см`;
  pizzaLittle.after(sizeLittle);
  sizeLittle.innerHTML = '26 см.';

  const pizzaMiddle = document.createElement('input');
  pizzaMiddle.type = 'radio';
  pizzaMiddle.id = `radios-size-${pizza.id}-30см`;
  pizzaMiddle.name = 'radios-size';
  pizzaMiddle.value = 30;
  pizzaMiddle.checked = pizza.activeSize === 30;
  sizeLittle.after(pizzaMiddle);

  const sizeMiddle = document.createElement('label');
  sizeMiddle.htmlFor = `radios-size-${pizza.id}-30см`;
  pizzaMiddle.after(sizeMiddle);
  sizeMiddle.innerHTML = '30 см.';

  const pizzaBig = document.createElement('input');
  pizzaBig.type = 'radio';
  pizzaBig.id = `radios-size-${pizza.id}-40см`;
  pizzaBig.name = 'radios-size';
  pizzaBig.value = 40;
  pizzaBig.checked = pizza.activeSize === 40;
  sizeMiddle.after(pizzaBig);

  const sizeBig = document.createElement('label');
  sizeBig.htmlFor = `radios-size-${pizza.id}-40см`;
  pizzaBig.after(sizeBig);
  sizeBig.innerHTML = '40 см.';

  const pizzaPriceAddition = document.createElement('div');
  pizzaPriceAddition.className = 'price_addition_pizza';
  pizzaOptions.after(pizzaPriceAddition);

  const pizzaPrice = document.createElement('div');
  pizzaPrice.className = 'price_pizza';
  pizzaPriceAddition.append(pizzaPrice);

  const prePriceText = document.createElement('div');
  pizzaPrice.append(prePriceText);
  prePriceText.innerHTML = 'от';

  const price = document.createElement('div');
  price.className = 'price';
  prePriceText.after(price);
  price.innerHTML = `${pizza.dough[pizza.activeDough][pizza.activeSize]} ₽`;

  const pizzaAddToCartButtonHandler = (event) => {
    const pizzaElement = event.path.find(el => el.className === 'pizza');
    const pizzaId = Number(pizzaElement.id);
    const currentPizza = pizzes.find(el => el.id === pizzaId);

    const cartPizzaElement = createCartPizza(currentPizza)
    addCartPizzaToUI(cartPizzaElement);
    cartPizzesUI.push(cartPizzaElement);

    cartPizzesData.push(currentPizza);

    document.querySelector('.number_pizzas').innerHTML = `${cartPizzesData.length} шт.`;
    document.querySelector('.number_pizza_basket').innerHTML = cartPizzesData.length;
  
    const resultSum = cartPizzesData.reduce((sum, el) => sum + el.dough[el.activeDough][el.activeSize], 0);
    document.querySelector('.grand_total').innerHTML = `${resultSum} ₽`;
    document.querySelector('.basket_money').innerHTML = `${resultSum} ₽`;
  }

  const pizzaAddToCartButton = document.createElement('button');
  pizzaAddToCartButton.className = 'button_pizza_add';
  pizzaPrice.after(pizzaAddToCartButton);
  pizzaAddToCartButton.addEventListener('click', pizzaAddToCartButtonHandler)

  const pizzaPlus = document.createElement('div');
  pizzaAddToCartButton.append(pizzaPlus);
  pizzaPlus.innerHTML = '+';

  const pizzaAdd = document.createElement('div');
  pizzaPlus.after(pizzaAdd);
  pizzaAdd.innerHTML = 'Добавить';

  return {
    UIPizza: pizzaContainer, 
    removeListenerFromButtonToCart: () => {
      pizzaAddToCartButton.removeEventListener('click', pizzaAddToCartButtonHandler)
    },
    removeListenerFromPizzaForm: () => {
      pizzaOptions.removeEventListener('change', pizzaOptionsHandler)
    }
  };
}

export function addPizzaToUI(pizzaToUI) {
  document.querySelector('.list_pizza').append(pizzaToUI.UIPizza);
}

export function removePizzaFromUI(pizzaInfo) {
  pizzaInfo.removeListenerFromButtonToCart();
  pizzaInfo.removeListenerFromPizzaForm();
  pizzaInfo.UIPizza.parentNode.removeChild(pizzaInfo.UIPizza);
}

export function createCartPizza(cart_pizza) {

  const pizzaLineCart = document.createElement('div');
  pizzaLineCart.className = 'line';
  pizzaLineCart.id = cart_pizza.id;

  const pizzaType = document.createElement('div');
  pizzaType.className = 'type_pizza';
  pizzaLineCart.append(pizzaType);

  const pizzaImgCart = document.createElement('img');
  pizzaImgCart.src = cart_pizza.img;
  pizzaImgCart.alt = 'pizza';
  pizzaType.append(pizzaImgCart);

  const pizzaDescription = document.createElement('div');
  pizzaDescription.className = 'description_pizzaa';
  pizzaImgCart.after(pizzaDescription);

  const pizzaNameCart = document.createElement('h2');
  pizzaDescription.append(pizzaNameCart);
  pizzaNameCart.innerHTML = cart_pizza.name;

  const pizzaCharacteristics = document.createElement('div');
  pizzaCharacteristics.className = 'characteristics_pizza';
  pizzaNameCart.after(pizzaCharacteristics);
  pizzaCharacteristics.innerHTML = `${cart_pizza.activeDough === 'thin' ? 'тонкое' : 'традиционное'},
  ${cart_pizza.activeSize} см.`;

  const pizzaChanges = document.createElement('div');
  pizzaChanges.className = 'changes_pizza';
  pizzaLineCart.append(pizzaChanges);

  const pizzaMinus = document.createElement('button');
  pizzaChanges.append(pizzaMinus);
  pizzaMinus.innerHTML = `-`;

  const pizzaNumber = document.createElement('div');
  pizzaNumber.className = 'number_pizza';
  pizzaMinus.after(pizzaNumber);
  pizzaNumber.innerHTML = `1`;

  const pizzaPlus = document.createElement('button');
  pizzaNumber.after(pizzaPlus);
  pizzaPlus.innerHTML = `+`;

  const pizzaCost = document.createElement('div');
  pizzaCost.className = 'cost_pizza';
  pizzaLineCart.append(pizzaCost);
  pizzaCost.innerHTML = `${cart_pizza.dough[cart_pizza.activeDough][cart_pizza.activeSize]} ₽`;

  const pizzaRemoveToCartButtonHandler = (event) => {
    const findedPizza = cartPizzesUI.find(el => `remove-${el.UIPizzaCart.id}` === event.target.id)
    removeCartPizzaFromUI(findedPizza);

    cartPizzesUI = cartPizzesUI.filter(el => `remove-${el.UIPizzaCart.id}` !== event.target.id);
 
    const pizzaElem = event.path.find(el => el.className === 'line');
    cartPizzesData = cartPizzesData.filter(el => el.id !== +pizzaElem.id);

    document.querySelector('.number_pizzas').innerHTML = `${cartPizzesData.length} шт.`;
    document.querySelector('.number_pizza_basket').innerHTML = cartPizzesData.length;
  
    const resultSum = cartPizzesData.reduce((sum, el) => sum + el.dough[el.activeDough][el.activeSize], 0);
    document.querySelector('.grand_total').innerHTML = `${resultSum} ₽`;
    document.querySelector('.basket_money').innerHTML = `${resultSum} ₽`;
  }

  const pizzaRemove = document.createElement('button');
  pizzaRemove.className = 'remove_pizza';
  pizzaLineCart.append(pizzaRemove);
  pizzaRemove.innerHTML = `x`;
  pizzaRemove.id = `remove-${cart_pizza.id}`
  pizzaRemove.addEventListener('click', pizzaRemoveToCartButtonHandler);

  return {
    UIPizzaCart: pizzaLineCart, 
    removeListenerFromPizzaCart: () => {
      pizzaRemove.removeEventListener('click', pizzaRemoveToCartButtonHandler);
    }
  }
}

export function addCartPizzaToUI(cartPizzaToUI) {
  document.querySelector('.pizza_selection').append(cartPizzaToUI.UIPizzaCart);
}

export function removeCartPizzaFromUI(pizzaInfo) {
  pizzaInfo.removeListenerFromPizzaCart();
  pizzaInfo.UIPizzaCart.parentNode.removeChild(pizzaInfo.UIPizzaCart);
}