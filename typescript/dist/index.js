"use strict";
// variable annotation
// let a:string="This is typescript"
// a="re Initialized"
// console.log(a);
Object.defineProperty(exports, "__esModule", { value: true });
// let b: number=10
// console.log(b);
// b=100
// console.log(b);
// let c:boolean=true
// console.log(c);
// array annotation
// let arr:number[]=[10,20,30,40,50]
// console.log(arr);
// let ar: string[]=["hi","bye"]
// console.log(ar);
// let arr2:[string,number]=["hii",30]
// console.log(arr2);
// object type  annotation
// let obj:{
//     name:string,
//     age:number
// }={
//     name:"typescript",
//     age:20
// }
// console.log(obj.name);
// console.log(obj.age);
// function annotation
// function person(name:string, age:number, isSalaried:boolean):String{
//     return name + age + isSalaried
// }
// console.log(person("Typescript", 20, true));
// union
// let str: number|string
// str=10
// str="ts"
// console.log(str);
// console.log("Hi im Bhavana");
// type inference: explicitly data is not mentioned
// let a=10
// a=100
// console.log( a)
// let b="Bhavana"
// b="Banglore"
// console.log( b);
// let isPlaced=true
// isPlaced=false
// console.log(isPlaced);
// let arr=[10,20,30,"bye", true]
// //arr[4]="hii" throws array
// //arr.push(40)
// //arr.push("hii")
// //arr.push(false)
// console.log(arr);
// let student = {
//     name: "Bhavana",
//     age: 22,
//     marks: 90,
//     passed: true
// };
// //student.name=10 error
// console.log(student);
// function add(a:number, b:number):number{
//     return a+b
// }
// a="JS"  error
// let res=add(10,20)
// console.log(res);
// console.log(add(10,20));
// function greet(name:string){
//     return " Hello" + name
// }
// console.log(greet(" Bhavana "));
// let price=200
// let product="laptop"
// let avail=true
// let marks=[10,20,30,40]
// let employee={
//     name:"rahul",
//     sal:5000
// }
// function multiply(x:number, y:number){
//     return x+y
// }
// data types in typescript
// 1. number
// 2. string
// 3. boolean
// 4. NULL
// let a:null=null
// console.log(a);
// 5. undefined
// let y:(undefined|string)
// y="hii"
// console.log(y);
// special data types
// any
// let a:any=10
// a="hii"
// a=true
// console.log(a);
// unkonown
// let data:unknown="This is js"
// if(typeof data=="string")
// {
//     console.log(data.toUpperCase());
// }
// void 
// function greet(){
//     console.log("Hello Bhavana");
// }
// greet();
// never
// function throwError():never{
//     throw new Error("Something went wrong!..Try again")
// }
// throwError()
// /3. NON PRIMITIVE / STRUCTURED DT
// /a. array
// square brackets
// let arr : number[] = [10,20,30,40]   //square brackets
// console.log(arr);
// generic
// let arr2 : Array<String> = ["javascript","html"]   //generic
// console.log(arr2);
// let arr3 : Array<number> = [10,20,30]   //generic
// console.log(arr3);
// accessing through index
// let arr : number[] = [10,20,30,40]
// console.log(arr[1]);
// console.log(arr[0]);
// some examples using methods of array
// a. push
// let arr : Array<string> = ["js","java","html"]
// arr.push("hii");
// console.log(arr);
// arr.push(10)  //can push the another datatype here
// b. pop
// let arr : Array<string> = ["hi","hee","hooo"]
// arr.pop()
// console.log(arr);
// c. shift
// let arr : Array<string> = ["hi","hee","hooo"]
// arr.shift()
// console.log(arr);
// d. unshift
// let arr : Array<string> = ["hi","hee","hooo"]
// arr.unshift("kilo")
// console.log(arr);
// some examples using array iteration methods
// a. map
// let arr : Array<number> =[10,20,30,40]
// let res : Array<number> = arr.map((value,i)=>{
//     return value + 20
// })
// console.log(res);
// b. reduce(sum of values)
// let arr : Array<number> =[10,20,30,40]
// let sum : number = arr.reduce((acc,curr)=>acc+curr)
// console.log(sum);
// c. filter
// let arr : Array<string> = ["hii","root","final","kilo","ratio","hello","for"]
// let arr2 : Array<string> = arr.filter((v,i)=>{
//     return v.startsWith("f")
// })
// console.log(arr2);
// d. foreach
// let arr : Array<string> = ["hi","hee","hooo"]
// arr.forEach((value)=>{
//     console.log(value+10);   
// })
// union type array
// let data: (number | string)[] = ["hii10"]
// let data1: (number | string)[] = ["hii" , 10]
// console.log(data);
// console.log(data1);
// multi-dimensional array
// let arr : number[][] = [
//     [10,20,30],
//     [40,50,60]
// ]
// console.log(arr[0][2]);      
// destructuring
// let arr : number[][] = [
//     [10,20,30],
//     [40,50,60]
// ]
// let [a,b] = arr
// console.log(a);
// console.log(b);
// object type annotation
// let student:{
//     name:string,
//     age:number,
//     isPlaced: boolean
// }={
//     name:"ashu",
//     age:21,
//     isPlaced:false
// }
// console.log(student.isPlaced);
// console.log(student["name"]);
// //modification
// student.age=22
// console.log(student.age);
// let tetsing:{
//     sub_1: string,
//     sub_2: string,
//     duration:string
//     isCompleted?: boolean //optional
// }={
//     sub_1:"maual",
//     sub_2:"playwright",
//     duration:"6 Months",
//     //isCompleted:false
// }
// console.log(tetsing.duration);
// array inside object
// let example: {
//     readonly courseName:string,
//     id: number,
//     soname: string,
//     email: string,
//     skills: Array<string>,
//     execute: () => void
// } = {
//     courseName:"Software testing",
//     id: 1,
//     soname: "Bhavana",
//     email: "bhavana@gmail.com",
//     skills: ["JavaScript", "Python", "HTML","CSS","Typescript"],
//     execute: () => {
//         console.log("HII this is testing course");
//     }
// };
// console.log(example.id);
// console.log(example.soname);
// console.log(example.email);
// console.log(example.skills);
// example.execute();
// example.courseName="testing"  //courseName is a readonly property
// type alias in object
// type Student={
//     id:number,
//     readonly name:string,
//     age:number,
//     isActive?:boolean
// }
// let student1: Student={
//     id:1,
//     name:"Akash",
//     age:22,
//     isActive:true
// }
// let student2:Student={
//     id:2,
//     name:"Bhavana",
//     age:22,
//     isActive:false
// }
// let student3:Student={
//     id:3,
//     name:"Chandana",
//     age:23
// }
// console.log(student1.age)
// console.log(student1.name);
// console.log(student1.id);
// console.log(student1.isActive);
// student1.name="Bhavya" //name property is readonly
// nested object using type alias
// type1
// type Address={
//     city:string,
//     state:string,
//     pincode:number
// }
// type Student={
//     name:string,
//     age:number,
//     address:Address
// }
// let student1:Student={
//     name:"BHAVANA",
//     age:22,
//     address:{
//         city:"Banglore",
//         state:"Karnataka",
//         pincode:560068
//     }
// }
// console.log(student1.address.state);
// console.log(student1.address.city);
// console.log(student1.address.pincode);
// type Address = {
//     city: string,
//     state: string,
//     pincode: number
// };
// type Student = {
//     id: number,
//     name: string,
//     address: Address
// };
// let student: Student = {
//     id: 101,
//     name: "Bhavana",
//     address: {
//         city: "Mysore",
//         state: "Karnataka",
//         pincode: 570001
//     }
// };
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.address.state);
// console.log(student);
// array of object
// type Employee={
//     id:number
//     name:string
//     salary:number
//     dept:string
// }
// let emp:Employee[]=[
//     {
//         id:1,
//         name:"rahul",
//         salary:10000,
//         dept:"DEV"
//     },{
//         id:2,
//         name:"ramesh",
//         salary:15000,
//         dept:"Testing"
//     },{
//         id:3,
//         name:"Bhavana",
//         salary:20000,
//         dept:"Frontend"
//     }
// ]
// console.log(emp);
// console.log(emp[0]);
// console.log(emp[1]);
// console.log(emp[2]);
// tuple
// let arr:[number,string]=[10,"Hii"]
// arr.push("BYEE")
// arr.pop()
// console.log(arr);
// type Student={
//     uname:string
//     age:number
//     skills:[string, number,boolean]
// }
// tuple with rest parameter
// let arr:[string,...number[]]=["hii",10,20,30,40,50]
// console.log(arr);
// type demo={
//     username:string,
//     age:number
//     [key:string]:(string|number)
// }
// let data:demo={
//     username:"prashanth",
//     age:1,
//     dept:"2",
//     manager:"yes",
//     isSalaried:"yes",
//     working:"no"
// }
// console.log(data);
// type arr = [string, number, ...string[]];
// let data: arr = ["Bhavana", 10, "JavaScript", "TypeScript"];
// data.forEach((value) => {
//     console.log(value);
// });
// function parameter with tuple rest
// let x:number[]=[10,20,30]
// let y:number[]=[40,50,60]
// function data(...b:number[]):number[]
// {
//     return b
// }
// let res=data(...x,...y)
// console.log(res);
// functions
// function with retrn type annotation
// function add(): number {
//     let a = 10;
//     let b = 20;
//     return a + b;
// }
// console.log(add());
// //function parameter type annotation
// function add1(a: number, b: number): number {
//     return a + b;
// }
// console.log(add1(10, 20));
// //function with void return type
// function display(): void {
//     console.log("Hello TypeScript");
// }
// display();
// //function expression:storing a function inside a variable
// let add2 = function(a: number, b: number): number {
//     return a + b;
// };
// console.log(add2(10, 20));
// //optional cahaining in function: Optional chaining (?.) allows us to safely call a function only if it exists.
// //If the function is undefined or null, it will not be called. Instead, it returns undefined.
// let greet = function() {
//     console.log("Hello Bhavana");
// };
// greet?.();
// function with defualt parameter
// function execute(name: string, salary: number = 5000): void {
//     console.log("Name:", name);
//     console.log("Salary:", salary);
// }
// execute("Prashanth", 10000);
// function inside object
// let student = {
//     name: "Bhavana",
//     age: 22,
//     display: function(): void {
//         console.log("This is typescript");
//     }
// };
// student.display();
// function getData(): [number[], string[]] {
//     let arr = [10, 20, 30, 40];
//     let msg = ["hii","bye"];
//     return [arr, msg];
// }
// console.log(getData());
// union in typescript:
// let data: string | number;
// data = "Bhavana";
// console.log(data);  //Bhavana
// data = 100;
// console.log(data);  //100
// data=true
// Type narrowing
// if(typeof data==="string"){
//     console.log(data.toUpperCase());   //BHAVANA
// }
// else{
//     console.log(data);   
// }
// type narrowing in function
// function printId(val: string|number){
//     if(val==="string")
//     {
//         return val.toUpperCase()
//     }
//     else{
//         return val.toString()
//     }
// }
// let result=printId(123)
// console.log(result);   //123
// console.log(typeof result); //string
// //union with array
// let items:(number|string)[]=["hii","hey",10,20]
// console.log(items);
// intersection
// type Person={
//     name:string
// }
// type Emp={
//     empId:number
// }
// type staff=Person & Emp
// let user :staff={
//     name:"Typescript",
//     empId:10
// }
// console.log(user); //{ name: 'Typescript', empId: 10 }
// 1 
// create 2 type emp: id, name  address:city, pin combine both type and create object
// type Emp = {
//     id: number;
//     name: string;
// };
// type Address = {
//     city: string;
//     pin: number;
// };
// Combining both types
// type Employe = Emp & Address;
// Creating object
// let emp: Employe = {
//     id: 101,
//     name: "Bhavana",
//     city: "Bangalore",
//     pin: 560001
// };
// console.log(emp);  //{ id: 101, name: 'Bhavana', city: 'Bangalore', pin: 560001 }
// 2
// create 2 types:personal details:name, age,address is a object which accepts city and state
// professional details :company name, sal, ecperience
// type PersonalDetails = {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         state: string;
//     };
// };
// type ProfessionalDetails = {
//     companyName: string;
//     sal: number;
//     experience: number;
// };
// Combining both types
// type Employee = PersonalDetails & ProfessionalDetails;
// Creating object
// let employee: Employee = {
//     name: "Bhavana",
//     age: 22,
//     address: {
//         city: "Bangalore",
//         state: "Karnataka"
//     },
//     companyName: "Infosys",
//     sal: 50000,
//     experience: 2
// };
// console.log(employee);
// 3
// create 2 type user:id, name  login function: username and returns a boolean 
// type User = {
//     id: number;
//     name: string;
// };
// type Login = {
//     login: (username: string) => boolean;
// };
// Combining both types
// type UserDetails = User & Login;
// // Creating object
// let user: UserDetails = {
//     id: 101,
//     name: "Bhavana",
//     login: function(username: string): boolean {
//         return username === "Bhavana";
//     }
// };
// console.log(user);
// console.log(user.login("Bhavana"));  //true
// console.log(user.login("Rahul"));  //false
// enum:
// by defualtly, it starts from 0
// enum direction{
//     north,
//     south,
//     east,
//     west
// }
// let move=direction.north
// console.log(move);
// if we want to start from specific number
// enum direction{
//     north=10,
//     south,
//     east,
//     west
// }
// let move=direction.south
// console.log(move); //11
// console.log(direction); 
// console.log(direction[11]);  //south
// enum statusCode{
//     success=200,
//     NotFound=404,
//     ServerError=500
// }
// let data=statusCode.success
// console.log(data);  //200
// console.log(statusCode["200"]); //success
// create a enum for the role which accepts admin, user, guest
// wite a function to check the acess, if role is admin allow the acess nor deny the acess
// enum Role{
//     admin="admin",
//     user="user",
//     guest="guest"
// }
// function checkAccess(val: Role): void {
//     if (val === Role.admin) {
//         console.log("Access Allowed");
//     } 
//     else {
//         console.log("Access Denied");
//     }
// }
// Function calls
// checkAccess(Role.admin);  //access allowed
// checkAccess(Role.user);   //access denied
// checkAccess(Role.guest)   //acess denied
// imagine ur building an online shopping website. each order can have status like pending, shipped, delivered, cancelled.
// instead of string values everywhere u can make ur code cleaner and easier
// enum order{
//     pending,
//     shipped,
//     delivered,
//     cancelled
// }
// function checkStatus(val: order): void {
//     if (val === order.pending) {
//         console.log("Your order is not confirmed yet!");
//     } 
//     else if(val===order.shipped){
//         console.log("Your order has been shipped");    
//     }
//     else if(val===order.delivered){
//         console.log("Your order has been delivered");    
//     }
//     else{
//         console.log("Your order has been cancelled!!!");  
//     }
// }
// checkStatus(order.cancelled)
// checkStatus(order.pending)
// checkStatus(order.delivered)
// checkStatus(order.shipped)
// literal typs:
// string literal type
// let status:"Success"|"error"|"Loading"
// status="Success"
// status="Loading"
// status="error"
// number literal type
// let sample:0|10|20|30
// sample=10
// sample=20
// sample=30
// sample=0
// boolean literal type
// let demo=true|false
// cretate a function that should accept only addition, subtraction, multiplication, division
// function calculator(operator:"add"|"sub"|"mul"|"div", x:number,y:number){
//     if(operator==="add"){
//         return x+y
//     }
//     else if(operator==="sub"){
//         return x-y
//     }
//     else if(operator==="mul"){
//         return x*y
//     }
//     else if(operator==="div"){
//         return x/y
//     }
//     else{
//         console.log("Invalid input");
//     }
// }
// console.log(calculator("sub", 10, 20));
// online shopping application can have 3 posiible conditions
// create a type PaymentStatus
// allowed values:"success","failed","pending"
// create a function:processpayment() that accepts the payment status
// An online shopping application can have 3 possible payment conditions
// type PaymentStatus = "success" | "failed" | "pending";
// function processPayment(status: PaymentStatus): string {
//   if (status === "success") {
//     return "Payment successful. Your order is confirmed.";
//   } else if (status === "failed") {
//     return "Payment failed. Please try again or use a different payment method.";
//   } else {
//     // status can only be "pending" here
//     return "Payment is pending. We'll notify you once it's processed.";
//   }
// }
// // Usage
// console.log(processPayment("success"));
// console.log(processPayment("failed"));
// console.log(processPayment("pending"));
// social media application
// a post can have different visibility setting
// requirements:
// create a type postVisibility
// allowed values:"public","private","friendsOnly"
// create a function uploadVisibility()
// A post in a social media application can have different visibility settings
// type PostVisibility = "public" | "private" | "friendsOnly";
// function uploadVisibility(visibility: PostVisibility): string {
//   if (visibility === "public") {
//     return "Post uploaded. Everyone can see it.";
//   } else if (visibility === "private") {
//     return "Post uploaded. Only you can see it.";
//   } else {
//     // visibility can only be "friendsOnly" here
//     return "Post uploaded. Only your friends can see it.";
//   }
// }
// // Usage
// console.log(uploadVisibility("public"));
// console.log(uploadVisibility("private"));
// console.log(uploadVisibility("friendsOnly"));
// cab booking application
// a cab can have different vehicle categories
// requireemnts
// create a type EnrollmentStatus
// allowed values:"enrolled","inprogress","completed","dropped"
// create a function bookCab()
// Cab booking application
// type EnrollmentStatus = "enrolled" | "inprogress" | "completed" | "dropped";
// function bookCab(status: EnrollmentStatus): string {
//   if (status === "enrolled") {
//     return "Cab booking confirmed. Your driver is being assigned.";
//   } else if (status === "inprogress") {
//     return "Your ride is in progress.";
//   } else if (status === "completed") {
//     return "Ride completed. Thanks for riding with us!";
//   } else {
//     return "Booking dropped. No charges applied.";
//   }
// }
// // Usage
// console.log(bookCab("enrolled"));
// console.log(bookCab("inprogress"));
// console.log(bookCab("completed"));
// console.log(bookCab("dropped"));
// interface:
// interface car {
//     brand_name: string;
//     model: string;
//     readonly price: number;
//     colour?:string
// }
// let obj: car = {
//     brand_name: "BMW",
//     model: "X5",
//     price: 100000,
//     colour:"Black"
// };
//obj.price=150000  //error
// console.log(obj); //{ brand_name: 'BMW', model: 'X5', price: 100000 }
//create a interface in function
// interface user {
//     id:number
//     name:string
//     email:string
//     age?:number
// }
// const user1: user={
//     id:2,
//     name:"js",
//     email:"abc@gmail.com",
//     age:22
// }
// function primitiveInfo(val:user){
//     if(user1.name==="js"){
//         console.log("This is js file");
//     }
//     else{
//         console.log("This is not js file");   
//     }
// }
// primitiveInfo(user1)
// console.log(user1)
//interface supports merging:
// interface user{
//     name:string
// }
// interface user{
//     age:number
// }
// let obj:user={
//     name:"JS",
//     age:10
// }
// console.log(obj); //{ name: 'JS', age: 10 }
//animal example:it is being extended to cat and dog
// interface animal{
//     name:string
//     age:number
// }
//interface dog
// interface dog extends animal{
//     breed:string
// }
// let myDog:dog={
//     name:"simba",
//     age:4,
//     breed:"Golden retriver"
// }
// console.log("Dog:",myDog);
// interface cat
// interface cat extends animal{
//     breed:string
// }
// let myCat:cat={
//     name:"chintu",
//     age:1,
//     breed:"persian"
// }
// console.log("Cat:",myCat);
//car example
// interface hasEngine {
//     engine: string;
// }
// interface hasWheels {
//     wheels: string;
// }
// interface Car extends hasEngine, hasWheels {
//     brand: string;
//     model: string;
// }
// let mycar: Car = {
//     engine: "YES",
//     wheels: "4",
//     brand: "BMW",
//     model: "X5"
// };
// console.log("Car:",mycar);
//OOPS:
// class person{
// }
// console.log(person);
// console.log(typeof person);
//car example
// class Car {
//     model: string;
//     year: string;
//     price: number;
//     constructor(model: string, year: string, price: number) {
//         this.model = model;
//         this.year = year;
//         this.price = price;
//     }
//     drive() {
//         console.log("Car has started");
//     }
//     stop(){
//         console.log("car has stopped");
//     }
// }
// let car1 = new Car("BMW", "2025", 100000);
// console.log(car1);
// car1.drive()
// car1.stop()
//constructor():
// class person{
//     name:string;
//     age:number;
//     gender:string;
//     constructor(name:string, age:number,gender:string){
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
// }
// let person1=new person("Bhavana",22,"Female")
// let person2=new person("anjali",20,"Female")
// let person3=new person("Abhi",20,"Male")
// console.log(person1);
// console.log(person2);
// console.log(person3);
//create a class student with props: name, age, rollno, course
//create a constructor to initialize properties
//create a method display_details to display student info
//create 3 student objects and display details
//class
// class Student{
//     name:string
//     age:number
//     rollno:number
//     course:string
//     //constructor
//     constructor(name:string, age:number, rollno:number, course:string){
//         this.name=name
//         this.age=age
//         this.rollno=rollno
//         this.course=course
//     }
//     //method
//     displayData(){
//         console.log("Name:", this.name);
//         console.log("Age:", this.age);
//         console.log("Roll No:", this.rollno);
//         console.log("Course:", this.course);
//     }
// }
// //objects
// let s1=new Student("Akash",20,1,"Python")
// let s2=new Student("Bhavana",20,2,"Java")
// let s3=new Student("Bhavya",20,3,"Java")
// console.log(s1);
// console.log(s2);
// console.log(s3);
// s1.displayData()
// console.log("-----");
// s2.displayData()
// console.log("-----");
// s3.displayData()
// console.log("-----");
//create a class emp: emp_name: emp_id, basic _sal
//create a method to create annual sal
//create a method to display employee details
// class Employee{
//     ename:string;
//     eid:number;
//     basic_sal:number
//     annual_sal:number
//     constructor(ename:string, eid:number, basic_sal:number, annual_sal:number){
//         this.ename=ename
//         this.eid=eid
//         this.basic_sal=basic_sal
//         this.annual_sal=annual_sal
//     }
//     //method
//     annualSal(){
//         this.annual_sal=this.basic_sal*12
//         console.log("Annual salary:",this.annual_sal);
//     }
//     displayEmp(){
//         console.log("Employee name:", this.ename);
//         console.log("Employee id:", this.eid);
//         console.log("Employee salary:", this.basic_sal);
//     }
// }
// let e1=new Employee("bhavana",12,1000)
// e1.displayEmp()
// e1.annualSal()
//create a class product: product name, price, and quantity
//calculate a total product avlue
//apply 10% discount if the price is above 5000
// class Product {
//     p_name: string;
//     p_price: number;
//     p_quantity: number;
//     total_price: number;
//     constructor(p_name: string, p_price: number, p_quantity: number) {
//         this.p_name = p_name;
//         this.p_price = p_price;
//         this.p_quantity = p_quantity;
//         this.total_price = 0;
//     }
//     totalPrice() {
//         this.total_price = this.p_price * this.p_quantity;
//         console.log("Product Name:", this.p_name);
//         console.log("Product Price:", this.p_price);
//         console.log("Product Quantity:", this.p_quantity);
//         console.log("Total Price:", this.total_price);
//         if (this.total_price > 5000) {
//             let discount = this.total_price * 0.10;
//             this.total_price = this.total_price - discount;
//             console.log("Discount:", discount);
//             console.log("Price after discount:", this.total_price);
//         }
//     }
// }
// let p1 = new Product("Pen", 10, 3);
// let p2 = new Product("Laptop", 60000, 2);
// p1.totalPrice();
// console.log("-------------");
// p2.totalPrice();
//inheritance:
// class parent{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     //method
//     eat(){
//         console.log(this.name + " is Eating");
//     }
// }
// class child extends parent{
//     //method
//     playing(){
//         console.log(this.name + " is playing");
//     }
// }
// let p1=new child("akash")
// p1.eat()
// p1.playing()
//create a vehicle class with brand and speed
//create a car class that inherrits vehicle and add fuel type
//display all details using child class objects
// class vehicle{
//     brand:string
//     speed:number
//     constructor(brand:string, speed:number){
//         this.brand=brand
//         this.speed=speed
//     }
// }
// class car extends vehicle{
//     fuel:string
//     constructor(brand:string, speed:number,fuel:string){
//         super(brand,speed)
//         this.fuel=fuel
//     }
//     display(){
//         console.log("Brand name:",this.brand);
//         console.log("Speed:",this.speed);
//         console.log("Fuel Type:",this.fuel);        
//     }   
// }
// let c1=new car("BMW",120,"petrol")
// c1.display()
//create a employee class:name, sal, password
//create a managaer child class try accessing all 3properties inside child class
// class employe{
//     public name="Rahul"
//     protected sal=100000
//     private password="123456"
// }
// class managaer extends employe{
//     display(){
//         console.log("Name:",this.name);
//         console.log("Salary:",this.sal);
//         //console.log(this.password);
//     }
// }
// let data=new managaer()
// data.display()
//polymorphism:
// interface paymentMode{
//     pay():void{
//     }
// }
// class upipayment implements paymentMode{
//     pay():void{
//         console.log("Payment done through UPI");
//     }
// }
// class cashPayment implements paymentMode{
//     pay():void{
//         console.log("Payment done through Cash");
//     }
// }
// class cardPayment implements paymentMode{
//     pay():void{
//         console.log("Payment done through Card");
//     }
// }
// class net_bankingPayment implements paymentMode{
//     pay():void{
//         console.log("Payment done through net banking");
//     }
// }
// let payment:paymentMode
// payment=new upipayment()
// payment.pay()
// console.log("--------------------");
// payment=new cashPayment()
// payment.pay()
// console.log("--------------------");
// payment=new cardPayment()
// payment.pay()
// console.log("--------------------");
// payment=new net_bankingPayment()
// payment.pay()
//create a payment class:    
// class paymentMode{
//     pay():void{
//     }
// }
// class gpay extends paymentMode{
//     pay():void{
//         console.log("Payment done through google pay");
//     }
// }
// class phonePay extends paymentMode{
//     pay():void{
//         console.log("Payment done through phone pay");
//     }
// }
// class paytm extends paymentMode{
//     pay():void{
//         console.log("Payment done through paytm");
//     }
// }
// let payment:paymentMode
// payment=new gpay()
// payment.pay()
//encapsulation:
// class BankAccount{
//     private balance:number=5000
//     deposit(amount:number):void{
//         if(amount>0){
//             this.balance+=amount
//             console.log("amount depsited");
//         }
//         else{
//             console.log("Invalid amount");
//         }
//     }
//     getBalance():number{
//             return this.balance
//     }
// }
// let account=new BankAccount()
// account.deposit(40000)
// console.log(account.getBalance());
//getter and setter functions
// class Employee {
//     private salary: number = 50000;
//     get getsalary(): number {
//         return this.salary;
//     }
//     set setSalary(amount: number) {
//         if (amount > 0) {
//             this.salary = amount;
//         }
//         else {
//             console.log("Invalid salary");
//         }
//     }
// }
// let emp = new Employee();
// // Before updating
// console.log("Old Salary:", emp.getsalary);
// // Update salary
// emp.setSalary = 100000;
// // After updating
// console.log("New Salary:", emp.getsalary);
//abstraction
// using abstract class
// abstract class Animal{
//     abstract makeSound():void
//     sleep():void{
//         console.log("Animal is sleeping");
//     }
// }
// class dog extends Animal{
//     makeSound(): void {
//         console.log("Dog barks");
//     }
// }
// class cat extends Animal{
//     makeSound(): void {
//         console.log("Cat meows");
//     }
// }
// let d1=new dog()
// d1.makeSound()
// let c1=new cat()
// c1.makeSound()
//example
// Abstract class
class ATM {
    // Public functionality
    withdraw(pin, amount) {
        if (this.verifyPIN(pin)) {
            console.log("PIN Verified");
            this.processTransaction(amount);
        }
        else {
            console.log("Invalid PIN");
        }
    }
    // Internal implementation
    processTransaction(amount) {
        console.log(amount + " withdrawal successful");
    }
}
// Child class
class SBI extends ATM {
    // Implementing abstract method
    verifyPIN(pin) {
        console.log("Verifying PIN");
        return pin === 1234;
    }
}
// Creating child class object
let atm = new SBI();
// Calling withdraw method
atm.withdraw(1234, 5000);
//# sourceMappingURL=index.js.map