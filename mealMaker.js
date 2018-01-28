
// menu objects declaration
const menu = {
  _courses: {
    	_appetizers: [],
    	_mains: [],
    	_desserts: [],

    	get appetizers() {
        return this._appetizers;
      },
  		set appetizers(item) {
         this._appetizers = item;
      },
    	get mains() {
        return this._mains;
      },
    	set mains(item) {
         this._mains = item;
      },
    	get desserts() {
        return this._desserts;
      },
    	set desserts(item) {
        this._desserts = item;
      }
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  set courses(item) {

  },

  addDishToCourse(courseName, name, price) {
    const dish = {
      name: name,
      price: price
    };
		this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dish = this._courses[courseName];
    const randomMeal = Math.floor(Math.random() * dish.length);
    return dish[randomMeal];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mainDish = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mainDish.price + dessert.price;
    return `Your meal is ${appetizer.name} with ${mainDish.name}, followed by ${dessert.name}.  Total price is $${totalPrice}`;
  }
};

// load menu
menu.addDishToCourse('_desserts', 'Mud Pie', 8.95);
menu.addDishToCourse('_mains', 'NY T-Bone Steak 12oz', 16.95);
menu.addDishToCourse('_mains', 'Lasagna', 9.95);
menu.addDishToCourse('_appetizers', 'Tuna Tartar', 8.75);
menu.addDishToCourse('_appetizers', 'Sea of Mussels', 9.99);
menu.addDishToCourse('_appetizers', 'Kumamoto Oysters', 13.75);
menu.addDishToCourse('_desserts', 'Ring Around Fingers', 25.99);
menu.addDishToCourse('_desserts', 'Megatower of Ice', 10.99);
menu.addDishToCourse('_desserts', 'MC Crepes', 6.99);
menu.addDishToCourse('_mains', 'Grilled Salmon', 11.50);
console.log(menu.courses);

// generate random meal
console.log(menu.generateRandomMeal());