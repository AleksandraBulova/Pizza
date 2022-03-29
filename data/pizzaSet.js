function Pizza(name, img, id, dough) {
  this.name = name;
  this.img = img;
  this.id = id;
  this.dough = dough,
  this.activeDough = 'thin',
  this.activeSize = 26
}

let cheeseburger = new Pizza('Чизбургер-пицца', '/assets/images/cheeseburger_pizza.png', 1, {
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

let cheese = new Pizza('Сырная', '/assets/images/cheese.png', 2, {
    thin: {
      26: 280,
      30: 320,
      40: 360
    },
    traditional: {
      26: 340,
      30: 380,
      40: 420
    }
  }
)

let shrimps = new Pizza('Креветки по-азиатски', '/assets/images/shrimps.png', 3, {
    thin: {
      26: 360,
      30: 400,
      40: 440
    },
    traditional: {
      26: 380,
      30: 440,
      40: 460
    }
  }
)

let cheeseСhicken = new Pizza('Сырныйцыпленок', '/assets/images/cheese_chicken.png', 4, {
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

let cheeseburger1 = new Pizza('Чизбургер-пицца', '/assets/images/cheeseburger_pizza.png', 5, {
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

let cheese1 = new Pizza('Сырная', '/assets/images/cheese.png', 6, {
    thin: {
      26: 280,
      30: 320,
      40: 360
    },
    traditional: {
      26: 340,
      30: 380,
      40: 420
    }
  }
)

let shrimps1 = new Pizza('Креветки по-азиатски', '/assets/images/shrimps.png', 7, {
    thin: {
      26: 360,
      30: 400,
      40: 440
    },
    traditional: {
      26: 380,
      30: 440,
      40: 460
    }
  }
)

let cheeseСhicken1 = new Pizza('Сырныйцыпленок', '/assets/images/cheese_chicken.png', 8, {
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

let pizzaSet = [cheeseburger, cheese, shrimps, cheeseСhicken, cheeseburger1, cheese1, shrimps1, cheeseСhicken1];

export default pizzaSet;