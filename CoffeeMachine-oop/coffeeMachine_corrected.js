let latte = {
    name: 'latte',
    water: 500,
    coffeeBeans: 7,
    milk: 150
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

  makeCoffee (coffeeType) {
    
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
console.log(myCoffeeMaker.makeCoffee(latte));
console.log(myCoffeeMaker.makeCoffee(latte));
console.log(myCoffeeMaker.makeCoffee(latte));
