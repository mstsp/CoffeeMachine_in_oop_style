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

class CheckWater {

    constructor(waterInStorege) {
        this.water = waterInStorege;
    }
  
    boil (water) {
        if(this.water >= water) {
            return true;
        } else {
            console.log(`There isn't enough water. Please refill it`);
            return false;
        }     
    }
}

class CheckCoffeeBeans {

    constructor(coffeeBeansInStorege) {
        this.coffeeBeans = coffeeBeansInStorege;
    }

    grind (coffeeBeans) {
        if(this.coffeeBeans >= coffeeBeans) {
            return true;
        } else {
            console.log(`There isn't enough coffeeBeans. Please refill it`);
            return false;
        }
    }
}

class CheckMilk {

    constructor(milkInStorege) {
        this.milk = milkInStorege;
    }

    add (milk) {
        if(this.milk >= milk) {
            return true;
        } else {
            console.log(`There isn't enough coffeeBeans. Please refill it`);
            return false;
        }
    }
}



class CoffeeMachine {
   constructor() {
        this.water = 1000;
        this.coffeeBeans = 500;
        this.milk = 300;
    }

    applyFor (coffeeType) {
        let boilWater = new CheckWater(this.water).boil(coffeeType.water);
        let grindCoffeeBeans = new CheckCoffeeBeans(this.coffeeBeans).grind(coffeeType.coffeeBeans);
        let addMilk = new CheckMilk(this.milk).add(coffeeType.milk);
        let makeCoffee = boilWater && grindCoffeeBeans && addMilk ? 'is done' : `can't be done`;

        this.water -= coffeeType.water;
        this.coffeeBeans -= coffeeType.coffeeBeans;
        this.milk -= coffeeType.milk;

        return `Your ${coffeeType.name} ${makeCoffee} `;
    }
  
    refillComponents() {
        this.water = 1000;
        this.coffeeBeans = 500;
        this.milk = 300;
        console.log('All the components are refilled');
        }
    }

const myCoffeeMaker = new CoffeeMachine();
console.log(myCoffeeMaker.applyFor(latte));
console.log(myCoffeeMaker.applyFor(latte));
console.log(myCoffeeMaker.applyFor(latte));
