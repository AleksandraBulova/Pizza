function Pizza(name, img, dough) {
  this.name = name;
  this.img = img;
  this.dough = dough;
}

let cheeseburger = new Pizza('Чизбургер-пицца', '/assets/images/cheeseburger_pizza.png', {
    thin: {
      26: 300,
      30: 340,
      40: 380
    },
    traditional: {
      26: 320,
      30: 360,
      40: 400
    }
  }
)

let pizzaSet = [cheeseburger];

export default pizzaSet;