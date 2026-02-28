// console.log("Hello, World!");
// //type inference
// let a=10
// a=20
// // not possible  ---   a="atul"


// //type annotation
// let b:string="Nikhil"
// // b=10  --- not possible

// let e:null=null
// let f:undefined
// // f="nikhil"  // not possible
// console.log(e, f);

// let arr=[1,2,3,4,5]
// let arr1:string[]=["a","b","c"]
// // arr1.push(1)  // not possible
// arr1.push("d")
// console.log(arr, arr1);

// //hetrogeneous array
// let arr2:(string|number)[]=[1,"a",2,"b",3,"c"]
// arr2.push(4)
// arr2.push("d")
// console.log(arr2);

// let arr3=[1,"a",2,"b",3,"c"]  // type inference
// arr3.push(4)
// arr3.push("d")
// console.log(arr3);

// let arr4:(any)[]=[1,"a",2,"b",3,"c"]  // type annotation
// arr4.push(4)
// arr4.push("d")
// console.log(arr4);

// //objects
// let obj:{
//     name:string,
//     age:number
// }={ 
//     name:"Nikhil", 
//     age:30}  // type inference
// // obj.name=10  // not possible
// obj.name="Atul"
// console.log(obj);

// //functions
// function greet(name:string, age:number=21){
//     console.log(`Hello ${name}, you are ${age} years old`); 
// }
// greet("Nikhil", 30)
// greet("Atul")  // age will be 21 by default

// function add(a:number, b:number):number{
//     return a+b
// }   
// console.log(add(10, 20))

// //interface
// // interface interface_name{
// //     property_name:property_type
// //     method_name(parameter:type):return_type}

// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     greet():void //can also put methods    
// }

// let person1:Person={
//     name:"Nikhil",
//     age:30,
//     gender:"Male",
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }
// console.log(person1);
// person1.greet();


// interface animal{
//     name:string,
//     age:number,
//     species:string,
//     breed:string,
//     // makeSound():void
// }

// interface dog extends animal{
//     breed:string
//     age:number
//     species:string
// }

// let mydog:dog={
//     name:"Buddy",
//     age:5,
//     species:"Canine",
//     breed:"Labrador",
// }
// console.log(mydog);


// //union types
// let myvar:string|number
// myvar="Hello"
// console.log(myvar);
// myvar=10
// console.log(myvar);

// //type aliases
// type ID=number|string
// let userID:ID

// //oops implementation

// class PersonClass{
//     name:string
//     age:number
//     constructor(name:string, age:number){
//         this.name=name
//         this.age=age
//     }   

//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// let person2=new PersonClass("Nikhil", 30)
// console.log(person2);
// person2.greet();

// //inheritance
// class Employee extends PersonClass{
//     employeeID:number   
//     constructor(name:string, age:number, employeeID:number){
//         super(name, age)
//         this.employeeID=employeeID
//     }
//     work(){
//         console.log(`${this.name} is working`);
//     }
// }

// let employee1=new Employee("Atul", 25, 101)
// console.log(employee1);
// employee1.greet()
// employee1.work()

// //access modifiers
// class Car{
//     private brand:string
//     protected model:string
//     public year:number
//     constructor(brand:string, model:string, year:number){
//         this.brand=brand
//         this.model=model
//         this.year=year
//     }
//     getBrand(){
//         return this.brand
//     }   
//     getModel(){
//         return this.model
//     }
//     getYear(){
//         return this.year
//     }
// }

// let car1=new Car("Toyota", "Camry", 2020)
// console.log(car1.getBrand());
// console.log(car1.getModel());
// console.log(car1.getYear());
// console.log(car1.brand);  // not possible
// console.log(car1.model); // not possible


// // console.log(car1.brand);  // not possible
// // console.log(car1.model);  // not possible


// //abstraction
// abstract class Shape{
//     abstract area():number
// }   
// class Circle extends Shape{
//     radius:number   
//     constructor(radius:number){
//         super()
//         this.radius=radius
//     }
//     area():number{
//         return Math.PI*this.radius*this.radius
//     }   
// }
// let circle1=new Circle(5)
// console.log(circle1.area());

//CALCULATOR
class Calculator{
    add(a:number, b:number):number{
        return a+b
    }   
    subtract(a:number, b:number):number{
        return a-b
    }
    multiply(a:number, b:number):number{
        return a*b
    }
    divide(a:number, b:number):number{
        if(b===0){
            throw new Error("Cannot divide by zero")
        }
        return a/b
    }
}

let calculator=new Calculator()
console.log(calculator.add(10, 20));
console.log(calculator.subtract(10, 20));
console.log(calculator.multiply(10, 20));
console.log(calculator.divide(10, 20));
 

//modules tutorial
// export class Calculator{
//     add(a:number, b:number):number{  
//         return a+b
//     }
//     subtract(a:number, b:number):number{
//         return a-b
//     }
//     multiply(a:number, b:number):number{
//         return a*b
//     }
//     divide(a:number, b:number):number{
//         if(b===0){
//             throw new Error("Cannot divide by zero")
//         }
//         return a/b
//     }
// }

function task1(){
    console.log("hellow from task 1");
    }

function task2(){
    console.log("hellow from task 2");
    }

task1()
task2()

console.log("start");
setTimeout(() => {
    console.log("This is a delayed message");
}, 5000);

setInterval(() => {
    console.log("This message will repeat every 3 seconds");
}, 2000);

console.log("end");


