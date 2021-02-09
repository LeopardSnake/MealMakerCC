const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        // console.log('appitizers getter working'); //uncomment to see it work
        return this._courses.appetizers;
    },
    get mains() {
        // console.log('mains getter working'); //uncomment to see if it work
        return this._courses.mains;
    },
    get desserts() {
        // console.log('desserts getter working'); //uncomment to see if it work
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        // console.log('appitizers setter working'); //uncomment to see if it work
    //   this._courses.appetizers = appetizers; not pushing into the array.
        this._courses.appetizers.push(appetizers); //When setter is called, it then pushes the input into the appropraite array.
    },
    set mains(mains) {
        // console.log('mains setter working'); //uncomment to see if it work
    //   this._courses.mains = mains;
        this._courses.mains.push(mains);
    },
    set desserts(desserts) {
        // console.log('desserts setter working'); //uncomment to see if it work
    //   this._courses.desserts = desserts;
    this._courses.desserts.push(desserts); 
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
        // return this._courses[courseName].push(dish); This code pushes directly into the array instead of using the setter method.
        return this[courseName] = dish;
    },
    getRandomDishFromCourse(courseName) {
        //   const dishes = this._courses[courseName]; This code goes into Menu -> _courses -> and then the valid array.
        const dishes = this[courseName];
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

const meal = menu.generateRandomMeal();
console.log(meal);
