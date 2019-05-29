 
class WaterController {
    constructor(waterCapacity) {
        this.maxCapacity = 1000; 
        this.water = waterCapacity;
    }

    decrement (water) {
        this.water -= water; 
    }

    refill() {
        this.water += (this.maxCapacity - this.water); 
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
  
class CoffeeBeansController {
    constructor(coffeeBeansCapacity) {
        this.maxCapacity = 100; 
        this.coffeeBeans = coffeeBeansCapacity;
    }

    decrement (coffeeBeans) {
        this.coffeeBeans -= coffeeBeans; 
    }

    refill() {
        this.coffeeBeans += (this.maxCapacity - this.coffeeBeans); 
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
  
class MilkController {
    constructor(milkCapacity) {
        this.maxCapacity = 500; 
        this.milk = milkCapacity;
    }

    decrement (milk) {
        this.milk -= milk; 
    }

    refill() {
        this.milk += (this.maxCapacity - this.milk); 
    }

    addMilk (milk) {
        if(this.milk >= milk) {
            return true;
        } else {
            console.log(`There isn't enough milk. Please refill it`);
            return false;
        }
    }
}
  
class CoffeeMachine {
    constructor(waterController, coffeeBeansController, milkController) {
        this.waterController = waterController; 
        this.coffeeBeansController = coffeeBeansController;
        this.milkController = milkController;
    }

    _canMakeCoffee (coffeeType) {
        let boilWater = this.waterController.boil(coffeeType.water);
        let grindCoffeeBeans = this.coffeeBeansController.grind(coffeeType.coffeeBeans);
        let addMilk = this.milkController.addMilk(coffeeType.milk);

        return boilWater && grindCoffeeBeans && addMilk ? true : false;
    }

    _decrementIngridients(coffeeType) {
        this.waterController.decrement(coffeeType.water);
        this.coffeeBeansController.decrement(coffeeType.coffeeBeans);
        this.milkController.decrement(coffeeType.milk);
    }

    makeLatte() {
        let latte = {
            name: 'latte',
            water: 50,
            coffeeBeans: 7,
            milk: 150
        }

        if (this._canMakeCoffee(latte)) {
            console.log(`Your ${latte.name} is done`); 
            this._decrementIngridients(latte);    
        } else {
            console.log(`Your ${latte.name} can't be done`); 
        }
    }

    makeEspresso() {
        let espresso = {
            name: 'espresso',
            water: 30,
            coffeeBeans: 7,
            milk: 0
        }

        if (this._canMakeCoffee(espresso)) {
            console.log(`Your ${espresso.name} is done`); 
            this._decrementIngridients(espresso); 
        }
    }

    makeAmericano() {
        let americano = {
            name: 'americano',
            water: 100,
            coffeeBeans: 14,
            milk: 0
        }

        if (this._canMakeCoffee(americano)) {
            console.log(`Your ${americano.name} is done`); 
            this._decrementIngridients(americano); 
        }

    }

    refillWater() {
        this.waterController.refill();
    }

    refillcoffeeBeansController() {
        this.coffeeBeansController.refill();
    }

    refillMilk() {
        this.milkController.refill();
    }
}
  
const myCoffeeMachine = new CoffeeMachine(new WaterController(1000), new CoffeeBeansController(100), new MilkController(500));
  
myCoffeeMachine.makeLatte();
myCoffeeMachine.makeLatte();
myCoffeeMachine.makeLatte();
myCoffeeMachine.makeLatte();
myCoffeeMachine.refillMilk();
myCoffeeMachine.makeLatte();
myCoffeeMachine.makeAmericano();
myCoffeeMachine.makeEspresso();