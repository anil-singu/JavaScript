let EmpDetails = function (name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    };
};

let emp1 = new EmpDetails('Rama', 16);
let emp2 = new EmpDetails('Krishna', 15);
console.log(emp1.getName());
console.log(emp2.getAge())
// *************************

let EmpDetails2 = function (name, age) {
    this.name = name;
    this.age = age;
 
};


EmpDetails2.prototype.getName = function () {
    return this.name;
};
EmpDetails2.prototype.getAge = function () {
    return this.age;
};

let emp3 = new EmpDetails2('Rama', 16);
let emp4 = new EmpDetails2('Krishna', 15);
console.log(emp3.getName());
console.log(emp4.getAge())