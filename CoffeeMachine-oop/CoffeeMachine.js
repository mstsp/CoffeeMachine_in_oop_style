let latte = {
    name: 'latte',
    water: 50,
    coffeeBeans: 7,
    milk: 150
}
  
let americano = {
    name: 'americano',
    water: 100,
    coffeeBeans: 14,
    milk: 0
}

let espresso = {
    name: 'espresso',
    water: 30,
    coffeeBeans: 7,
    milk: 0
}
  
class CoffeeMachine {
    constructor() {
        this.water = 1000;
        this.coffeeBeans = 500;
        this.milk = 300;
    }
      
    _checkWater(coffeeType) {
        if (this.water >= coffeeType.water) {
            return true;
        } else {
            console.log(`There isn't enough water. Please refill it`);
            return false;
        }
    }
    
    _checkCoffeeBeans(coffeeType) {
        if (this.coffeeBeans >= coffeeType.coffeeBeans) {
            return true;
        } else {
            console.log(`There isn't enough coffee beans. Please refill it`);
            return false;
        }
    }
    
    _checkMilk(coffeeType) {
        if (this.milk >= coffeeType.milk) {
            return true;
        } else {
            console.log(`There isn't enough milk. Please refill it`);
            return false;
        }
    }
  
    _canMakeCoffe(coffeeType) {
        if (this._checkWater(coffeeType) && this._checkCoffeeBeans(coffeeType) && this._checkMilk(coffeeType) ) {
            return true;
        } else {
            return false;
        }
    }
    
    makeCoffee(coffeeType) {
        if(this._canMakeCoffe(coffeeType)) {
            console.log(`Your ${coffeeType.name} is ready`);

            this.water = this.water - coffeeType.water;
            this.coffeeBean = this.coffeeBean - coffeeType.coffeeBeans;
            this.milk = this.milk - coffeeType.milk;
        } 
    }

    refillComponents() {
        this.water = 1000;
        this.coffeeBeans = 500;
        this.milk = 300;
       console.log('All the components are refilled')
    }
      
  }
  
var coffeeMachine = new CoffeeMachine();
coffeeMachine.makeCoffee(latte);
coffeeMachine.makeCoffee(americano);  
coffeeMachine.makeCoffee(latte);  
coffeeMachine.makeCoffee(latte);
coffeeMachine.refillComponents();
coffeeMachine.makeCoffee(latte);
coffeeMachine.makeCoffee(latte);