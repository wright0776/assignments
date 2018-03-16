var employees = [];

var Employee = function (name, job, salary, status) {
    this.name = name;
    this.job = job;
    this.salary = salary;
    if (status) {
        this.status = status;
    } else {
        this.status = "Full Time";
    };
    this.printEmployeeForm = function () {
        console.log("\nEmployee Name: " + this.name + " " + "\nJob Title: " + this.job + " " + "\nSalary: " + this.salary + " " + "\nStatus: " + this.status + "\n")
    };
    employees.push(this)
}

var fluffy = new Employee("Fluffy","Cheif Snuggling Officer",10);
var grouch = new Employee("Grouch","Head of the Department of Dirty Looks",5);
var cheech = new Employee("Cheech","Manager of Nap Department",2,"Part Time");

fluffy.printEmployeeForm();
grouch.printEmployeeForm();
cheech.printEmployeeForm();
