"use strict"

//task1
let person = {};

person.name = "ПИЛИП";
console.log(person)
person.surname = "ШЕВЧЕНКО";
console.log(person)
person.name = "СЕРГІЙ";
console.log(person)
delete person.name;
console.log(person)

//task2

let employeeSalaries = {
    salary:100,
    salary1:150,
    salary2:250
};

function alert(number){
    console.log('Зарплата працівників: '+number);
}
let count = 0;
for (let salary in employeeSalaries){
    count+=employeeSalaries[salary]
}
alert(count)

//task3

function calculator(a,b,operator) {
    process.stdout.write(a + " " + operator + " " + b + " = ");
    let result = '';
    try {
        if (isNaN(a) || isNaN(b)) {
            throw 'IncorectNumber';

        } else if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
            throw 'IncorectOperator';

        } else {
            switch (operator) {
                case ("+"): {
                    result = a + b;
                    break;
                }
                case ("-"): {
                    result = a - b;
                    break;
                }
                case ("*"): {
                    result = a * b;
                    break;
                }
                case ("/"): {
                    if (b == 0) {
                        throw "На 0 ділити неможна";
                    } else {
                        result = a / b;
                        break;
                    }
                }
            }
        }
    } catch (error) {
        process.stdout.write(error);
    }
    return result;
}
console.log(calculator("a",3,"+"));
console.log(calculator(2,3,"-"));
console.log(calculator(2,3,"t"));
console.log(calculator(2,3,"/"));


