function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    monthlyBonus = 1000;

    let calculateFinalSalary = function () {
        console.log(baseSalary);
        console.log(monthlyBonus);
        finalSalary = baseSalary +  monthlyBonus;
        console.log('Final Salary is :' + finalSalary);
    }

    this.getEmpDetails = function () {
        console.log('Name : ' + this.name + ' | Age : ' + this.age)
        calculateFinalSalary();
    }
}

let emp1 = new Employee('Vishnu', 30, 50000);
emp1.getEmpDetails();
// emp1.calculateFinalSalary();
// emp1.monthlyBonus = 10000
// emp1.calculateFinalSalary();