class Device {
  constructor(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isPlugged = false;
  }

  plug() {
    this.isPlugged = true;
    console.log(`${this.name} is plugged!`);
  }

  unplug() {
    this.isPlugged = false;
    console.log(`${this.name} is unplugged!`);
  }
}

class Desktop extends Device {
  constructor(name, brand, power, type, functionality) {
    super(name, brand, power);
    this.type = type;
    this.functionality = functionality;
  }
}

class Light extends Device {
  constructor(name, brand, power, bulbType) {
    super(name, brand, power);
    this.bulbType = bulbType;
  }
}

const myDesktop = new Desktop('Table PC', 'Intel', 120, 'stationary', 'for work');
const myLight = new Light('Table lamp', 'Xiaomi', 5, 'LED');

myLight.unplug();
myDesktop.plug();

console.log(myDesktop);
console.log(myLight);