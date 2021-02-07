const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and costs R${totalPrice}`
    }
  };
  
  menu.addDishToCourse('appetizers', 'Crumbed Mushrooms', 28.00);
  menu.addDishToCourse('appetizers', 'Chicken Wings', 32.00);
  menu.addDishToCourse('appetizers', 'Caesar Salad', 35.00);
    
  menu.addDishToCourse('mains', 'Cheddar-Melt Steak', 249.00);
  menu.addDishToCourse('mains', 'Half-Chicken', 199.00);
  menu.addDishToCourse('mains', 'Salmon Steak', 267.00);
      
  menu.addDishToCourse('desserts', 'Ice-cream & chocolate sauce', 35.00);
  menu.addDishToCourse('desserts', 'Cheesecake', 49.00);
  menu.addDishToCourse('desserts', 'Carrot cake', 87.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);  