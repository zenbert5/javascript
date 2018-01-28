
// menu objects declaration
const menu = {
  _courses: {
    	_appetizers: [],
    	_mains: [],
    	_desserts: [],

    	get appetizers() {},
  		set appetizers(item) {},
    	get mains() {},
    	set mains(item) {},
    	get desserts() {},
    	set desserts(item) {
        this._desserts['name'] = item.name;
        this._desserts['price'] = item.price;
      }
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse(courseName, name, price) {
    const dish = {
      name: name,
      price: price
    };
    console.log(dish);
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


menu.addDishToCourse('appetizers', 'Mud Pie', 8.95);
