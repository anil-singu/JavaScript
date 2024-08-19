class Car{

    setCarName(carName) {
        this.carName = carName;
    }
    setStartEngine() {
        console.log('Engine started for car :' + this.carName);
    }
    setStopEngine() {
        console.log('Engine stopped for car :' + this.carName);
    }        
}

class Toyota extends Car{
    topSpeed(speed){
        console.log('Top speed for '+this.carName + ' is '+speed)
    }
}

myCar = new Toyota();

myCar.setCarName('PushpakaVimanam');
myCar.setStartEngine();
myCar.setStopEngine();
myCar.topSpeed(200);