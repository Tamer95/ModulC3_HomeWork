class ElectricalDevice {
  constructor(deviceName, devicePower){
    this.deviceName = deviceName;
    this.devicePower = devicePower;
    this.isDevicePlugged = false;
  }
  plug() {
    console.log(this.deviceName + " is plugged!");
    this.isDevicePlugged = true;
  }
  
  unplug() {
    console.log(this.deviceName + " is unplugged!");
    this.isDevicePlugged = false;
  }
}

class Light extends ElectricalDevice {
  constructor (deviceName, deviceBrand, devicePower, bulbType) {
    super(deviceName, devicePower);
    this.deviceBrand = deviceBrand;
    this.bulbType = bulbType;
    this.isDevicePlugged = true;
  }
}

class Desktop extends ElectricalDevice {
  constructor(deviceName, deviceBrand, devicePower, deviceType, deviceFunctionality) {
    super(deviceName, devicePower); 
    this.deviceBrand = deviceBrand;
    this.deviceType = deviceType;
    this.deviceFunctionality = deviceFunctionality;
    this.isDevicePlugged = false;
  }
}

const myLight = new Light("Table lamp", "Xiaomi", 5, "LED");

const myDesktop = new Desktop("Table PC", "Intel", 120, "stationary", "for work");

myLight.unplug();

myDesktop.plug();
console.log(myDesktop)
console.log(myLight)