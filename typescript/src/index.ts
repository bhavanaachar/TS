variable annotation
let a:string="This is typescript"
a="re Initialized"
console.log(a);

let b: number=10
console.log(b);
b=100
console.log(b);

let c:boolean=true
console.log(c);

array annotation
let arr:number[]=[10,20,30,40,50]
console.log(arr);

let ar: string[]=["hi","bye"]
console.log(ar);

let arr2:[string,number]=["hii",30]
console.log(arr2);

object type  annotation
let obj:{
    name:string,
    age:number
}={
    name:"typescript",
    age:20
}
console.log(obj.name);
console.log(obj.age);

function annotation
function person(name:string, age:number, isSalaried:boolean):String{
    return name + age + isSalaried
    
}
console.log(person("Typescript", 20, true));

union
let str: number|string
str=10
str="ts"
console.log(str);
console.log("Hi im Bhavana");

type inference: explicitly data is not mentioned
let a=10
a=100
console.log( a)


let b="Bhavana"
b="Banglore"
console.log( b);


let isPlaced=true
isPlaced=false
console.log(isPlaced);


let arr=[10,20,30,"bye", true]
//arr[4]="hii" throws array
//arr.push(40)

//arr.push("hii")
//arr.push(false)
console.log(arr);

let student = {
    name: "Bhavana",
    age: 22,
    marks: 90,
    passed: true
};
//student.name=10 error
console.log(student);


function add(a:number, b:number):number{
    return a+b
}
a="JS"  error
let res=add(10,20)
console.log(res);
console.log(add(10,20));



function greet(name:string){
    return " Hello" + name
}
console.log(greet(" Bhavana "));

let price=200
let product="laptop"
let avail=true

let marks=[10,20,30,40]


let employee={
    name:"rahul",
    sal:5000
}

function multiply(x:number, y:number){
    return x+y
}

data types in typescript
1. number
2. string
3. boolean
4. NULL
let a:null=null

console.log(a);
 
5. undefined
let y:(undefined|string)
y="hii"
console.log(y);

special data types
any
let a:any=10
a="hii"
a=true
console.log(a);

unkonown
let data:unknown="This is js"
if(typeof data=="string")
{
    console.log(data.toUpperCase());
    
}

void 
function greet(){
    console.log("Hello Bhavana");
}
greet();

never
function throwError():never{
    throw new Error("Something went wrong!..Try again")
}
throwError()

/3. NON PRIMITIVE / STRUCTURED DT
/a. array
square brackets
let arr : number[] = [10,20,30,40]   //square brackets
console.log(arr);

generic
let arr2 : Array<String> = ["javascript","html"]   //generic
console.log(arr2);
let arr3 : Array<number> = [10,20,30]   //generic
console.log(arr3);

accessing through index
let arr : number[] = [10,20,30,40]
console.log(arr[1]);
console.log(arr[0]);

some examples using methods of array
a. push
let arr : Array<string> = ["js","java","html"]
arr.push("hii");
console.log(arr);
arr.push(10)  //can push the another datatype here

b. pop
let arr : Array<string> = ["hi","hee","hooo"]
arr.pop()
console.log(arr);

c. shift
let arr : Array<string> = ["hi","hee","hooo"]
arr.shift()
console.log(arr);

d. unshift
let arr : Array<string> = ["hi","hee","hooo"]
arr.unshift("kilo")
console.log(arr);

some examples using array iteration methods
a. map
let arr : Array<number> =[10,20,30,40]
let res : Array<number> = arr.map((value,i)=>{
    return value + 20
})
console.log(res);

b. reduce(sum of values)
let arr : Array<number> =[10,20,30,40]
let sum : number = arr.reduce((acc,curr)=>acc+curr)
console.log(sum);

c. filter
let arr : Array<string> = ["hii","root","final","kilo","ratio","hello","for"]
let arr2 : Array<string> = arr.filter((v,i)=>{
    return v.startsWith("f")
})
console.log(arr2);

d. foreach
let arr : Array<string> = ["hi","hee","hooo"]
arr.forEach((value)=>{
    console.log(value+10);   
})

union type array
let data: (number | string)[] = ["hii10"]
let data1: (number | string)[] = ["hii" , 10]
console.log(data);
console.log(data1);

multi-dimensional array
let arr : number[][] = [
    [10,20,30],
    [40,50,60]
]
console.log(arr[0][2]);      

destructuring
let arr : number[][] = [
    [10,20,30],
    [40,50,60]
]
let [a,b] = arr
console.log(a);
console.log(b);

object type annotation

let student:{
    name:string,
    age:number,
    isPlaced: boolean

}={
    name:"ashu",
    age:21,
    isPlaced:false

}
console.log(student.isPlaced);
console.log(student["name"]);

//modification
student.age=22
console.log(student.age);

let tetsing:{
    sub_1: string,
    sub_2: string,
    duration:string
    isCompleted?: boolean //optional
}={
    sub_1:"maual",
    sub_2:"playwright",
    duration:"6 Months",
    //isCompleted:false
}

console.log(tetsing.duration);

array inside object
let example: {
    readonly courseName:string,
    id: number,
    soname: string,
    email: string,
    skills: Array<string>,
    execute: () => void
} = {
    courseName:"Software testing",
    id: 1,
    soname: "Bhavana",
    email: "bhavana@gmail.com",
    skills: ["JavaScript", "Python", "HTML","CSS","Typescript"],
    execute: () => {
        console.log("HII this is testing course");
    }
};

console.log(example.id);
console.log(example.soname);
console.log(example.email);
console.log(example.skills);

example.execute();

example.courseName="testing"  //courseName is a readonly property

type alias in object
type Student={
    id:number,
    readonly name:string,
    age:number,
    isActive?:boolean
}
let student1: Student={
    id:1,
    name:"Akash",
    age:22,
    isActive:true
}
let student2:Student={
    id:2,
    name:"Bhavana",
    age:22,
    isActive:false
}
let student3:Student={
    id:3,
    name:"Chandana",
    age:23
}
console.log(student1.age)
console.log(student1.name);
console.log(student1.id);
console.log(student1.isActive);

student1.name="Bhavya" //name property is readonly


nested object using type alias
type1
type Address={
    city:string,
    state:string,
    pincode:number
}
type Student={
    name:string,
    age:number,
    address:Address
}
let student1:Student={
    name:"BHAVANA",
    age:22,
    address:{
        city:"Banglore",
        state:"Karnataka",
        pincode:560068
    }
}
console.log(student1.address.state);
console.log(student1.address.city);
console.log(student1.address.pincode);

type Address = {
    city: string,
    state: string,
    pincode: number
};

type Student = {
    id: number,
    name: string,
    address: Address
};

let student: Student = {
    id: 101,
    name: "Bhavana",
    address: {
        city: "Mysore",
        state: "Karnataka",
        pincode: 570001
    }
};

console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);
console.log(student);

array of object
type Employee={
    id:number
    name:string
    salary:number
    dept:string
}
let emp:Employee[]=[
    {
        id:1,
        name:"rahul",
        salary:10000,
        dept:"DEV"
    },{
        id:2,
        name:"ramesh",
        salary:15000,
        dept:"Testing"
    },{
        id:3,
        name:"Bhavana",
        salary:20000,
        dept:"Frontend"
    }
]
console.log(emp);
console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);


tuple
let arr:[number,string]=[10,"Hii"]
arr.push("BYEE")
arr.pop()
console.log(arr);

type Student={
    uname:string
    age:number
    skills:[string, number,boolean]
}

tuple with rest parameter
let arr:[string,...number[]]=["hii",10,20,30,40,50]
console.log(arr);

type demo={
    username:string,
    age:number
    [key:string]:(string|number)

}
let data:demo={
    username:"prashanth",
    age:1,
    dept:"2",
    manager:"yes",
    isSalaried:"yes",
    working:"no"
}
console.log(data);

type arr = [string, number, ...string[]];

let data: arr = ["Bhavana", 10, "JavaScript", "TypeScript"];

data.forEach((value) => {
    console.log(value);
});

function parameter with tuple rest

let x:number[]=[10,20,30]
let y:number[]=[40,50,60]
function data(...b:number[]):number[]
{
    return b
}
let res=data(...x,...y)
console.log(res);

functions

function with retrn type annotation
function add(): number {
    let a = 10;
    let b = 20;

    return a + b;
}

console.log(add());

//function parameter type annotation
function add1(a: number, b: number): number {
    return a + b;
}

console.log(add1(10, 20));

//function with void return type
function display(): void {
    console.log("Hello TypeScript");
}

display();

//function expression:storing a function inside a variable
let add2 = function(a: number, b: number): number {
    return a + b;
};

console.log(add2(10, 20));

//optional cahaining in function: Optional chaining (?.) allows us to safely call a function only if it exists.

//If the function is undefined or null, it will not be called. Instead, it returns undefined.
let greet = function() {
    console.log("Hello Bhavana");
};

greet?.();

function with defualt parameter
function execute(name: string, salary: number = 5000): void {
    console.log("Name:", name);
    console.log("Salary:", salary);
}

execute("Prashanth", 10000);

function inside object
let student = {
    name: "Bhavana",
    age: 22,

    display: function(): void {
        console.log("This is typescript");
        
    }
};

student.display();

function getData(): [number[], string[]] {
    let arr = [10, 20, 30, 40];
    let msg = ["hii","bye"];

    return [arr, msg];
}

console.log(getData());

union in typescript:
let data: string | number;

data = "Bhavana";
console.log(data);  //Bhavana

data = 100;
console.log(data);  //100

data=true

Type narrowing
if(typeof data==="string"){
    console.log(data.toUpperCase());   //BHAVANA
    
}
else{
    console.log(data);   
}

type narrowing in function
function printId(val: string|number){
    if(val==="string")
    {
        return val.toUpperCase()
    }
    else{
        return val.toString()
    }
}
let result=printId(123)
console.log(result);   //123
console.log(typeof result); //string


//union with array
let items:(number|string)[]=["hii","hey",10,20]
console.log(items);

intersection

type Person={
    name:string
}
type Emp={
    empId:number
}
type staff=Person & Emp

let user :staff={
    name:"Typescript",
    empId:10
}
console.log(user); //{ name: 'Typescript', empId: 10 }

1 
create 2 type emp: id, name  address:city, pin combine both type and create object
type Emp = {
    id: number;
    name: string;
};

type Address = {
    city: string;
    pin: number;
};

Combining both types
type Employe = Emp & Address;

Creating object
let emp: Employe = {
    id: 101,
    name: "Bhavana",
    city: "Bangalore",
    pin: 560001
};

console.log(emp);  //{ id: 101, name: 'Bhavana', city: 'Bangalore', pin: 560001 }

2
create 2 types:personal details:name, age,address is a object which accepts city and state
professional details :company name, sal, ecperience
type PersonalDetails = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    };
};

type ProfessionalDetails = {
    companyName: string;
    sal: number;
    experience: number;
};

Combining both types
type Employee = PersonalDetails & ProfessionalDetails;

Creating object
let employee: Employee = {
    name: "Bhavana",
    age: 22,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    },
    companyName: "Infosys",
    sal: 50000,
    experience: 2
};

console.log(employee);

3
create 2 type user:id, name  login function: username and returns a boolean 
type User = {
    id: number;
    name: string;
};

type Login = {
    login: (username: string) => boolean;
};

Combining both types
type UserDetails = User & Login;

// Creating object
let user: UserDetails = {
    id: 101,
    name: "Bhavana",

    login: function(username: string): boolean {
        return username === "Bhavana";
    }
};

console.log(user);
console.log(user.login("Bhavana"));  //true
console.log(user.login("Rahul"));  //false

enum:
by defualtly, it starts from 0
enum direction{
    north,
    south,
    east,
    west
}
let move=direction.north
console.log(move);

if we want to start from specific number
enum direction{
    north=10,
    south,
    east,
    west
}
let move=direction.south
console.log(move); //11
console.log(direction); 
console.log(direction[11]);  //south

enum statusCode{
    success=200,
    NotFound=404,
    ServerError=500
}
let data=statusCode.success
console.log(data);  //200
console.log(statusCode["200"]); //success

create a enum for the role which accepts admin, user, guest
wite a function to check the acess, if role is admin allow the acess nor deny the acess

enum Role{
    admin="admin",
    user="user",
    guest="guest"
}

function checkAccess(val: Role): void {
    if (val === Role.admin) {
        console.log("Access Allowed");
    } 
    else {
        console.log("Access Denied");
    }
}

Function calls
checkAccess(Role.admin);  //access allowed
checkAccess(Role.user);   //access denied
checkAccess(Role.guest)   //acess denied

imagine ur building an online shopping website. each order can have status like pending, shipped, delivered, cancelled.
instead of string values everywhere u can make ur code cleaner and easier

enum order{
    pending,
    shipped,
    delivered,
    cancelled
}
function checkStatus(val: order): void {
    if (val === order.pending) {
        console.log("Your order is not confirmed yet!");
    } 
    else if(val===order.shipped){
        console.log("Your order has been shipped");    
    }
    else if(val===order.delivered){
        console.log("Your order has been delivered");    
    }
    else{
        console.log("Your order has been cancelled!!!");  
    }
}
checkStatus(order.cancelled)
checkStatus(order.pending)
checkStatus(order.delivered)
checkStatus(order.shipped)

literal typs:
string literal type
let status:"Success"|"error"|"Loading"
status="Success"
status="Loading"
status="error"

number literal type
let sample:0|10|20|30
sample=10
sample=20
sample=30
sample=0

boolean literal type
let demo=true|false

cretate a function that should accept only addition, subtraction, multiplication, division
function calculator(operator:"add"|"sub"|"mul"|"div", x:number,y:number){
    if(operator==="add"){
        return x+y
    }
    else if(operator==="sub"){
        return x-y
    }
    else if(operator==="mul"){
        return x*y
    }
    else if(operator==="div"){
        return x/y
    }
    else{
        console.log("Invalid input");
        
    }
}
console.log(calculator("sub", 10, 20));

online shopping application can have 3 posiible conditions
create a type PaymentStatus
allowed values:"success","failed","pending"
create a function:processpayment() that accepts the payment status
An online shopping application can have 3 possible payment conditions

type PaymentStatus = "success" | "failed" | "pending";
function processPayment(status: PaymentStatus): string {
  if (status === "success") {
    return "Payment successful. Your order is confirmed.";
  } else if (status === "failed") {
    return "Payment failed. Please try again or use a different payment method.";
  } else {
    // status can only be "pending" here
    return "Payment is pending. We'll notify you once it's processed.";
  }
}
// Usage
console.log(processPayment("success"));
console.log(processPayment("failed"));
console.log(processPayment("pending"));

social media application
a post can have different visibility setting
requirements:
create a type postVisibility
allowed values:"public","private","friendsOnly"
create a function uploadVisibility()
A post in a social media application can have different visibility settings

type PostVisibility = "public" | "private" | "friendsOnly";

function uploadVisibility(visibility: PostVisibility): string {
  if (visibility === "public") {
    return "Post uploaded. Everyone can see it.";
  } else if (visibility === "private") {
    return "Post uploaded. Only you can see it.";
  } else {
    // visibility can only be "friendsOnly" here
    return "Post uploaded. Only your friends can see it.";
  }
}
// Usage
console.log(uploadVisibility("public"));
console.log(uploadVisibility("private"));
console.log(uploadVisibility("friendsOnly"));


cab booking application
a cab can have different vehicle categories
requireemnts
create a type EnrollmentStatus
allowed values:"enrolled","inprogress","completed","dropped"
create a function bookCab()

Cab booking application
type EnrollmentStatus = "enrolled" | "inprogress" | "completed" | "dropped";
function bookCab(status: EnrollmentStatus): string {
  if (status === "enrolled") {
    return "Cab booking confirmed. Your driver is being assigned.";
  } else if (status === "inprogress") {
    return "Your ride is in progress.";
  } else if (status === "completed") {
    return "Ride completed. Thanks for riding with us!";
  } else {
    return "Booking dropped. No charges applied.";
  }
}
// Usage
console.log(bookCab("enrolled"));
console.log(bookCab("inprogress"));
console.log(bookCab("completed"));
console.log(bookCab("dropped"));

interface:
interface car {
    brand_name: string;
    model: string;
    readonly price: number;
    colour?:string
}

let obj: car = {
    brand_name: "BMW",
    model: "X5",
    price: 100000,
    colour:"Black"

};+
obj.price=150000  error
console.log(obj); //{ brand_name: 'BMW', model: 'X5', price: 100000 }

create a interface in function

interface user {
    id:number
    name:string
    email:string
    age?:number
}
const user1: user={
    id:2,
    name:"js",
    email:"abc@gmail.com",
    age:22
}
function primitiveInfo(val:user){
    if(user1.name==="js"){
        console.log("This is js file");
        
    }
    else{
        console.log("This is not js file");   
    }
}
primitiveInfo(user1)
console.log(user1)

interface supports merging:
interface user{
    name:string
}
interface user{
    age:number
}
let obj:user={
    name:"JS",
    age:10
}
console.log(obj); //{ name: 'JS', age: 10 }

type user={
    name:string
}
type person={
    age:number
}
type emp=user& person

interface animal{
    name:string
    age:number
}
interface dog extends animal{
    breed:string
}

let myDog:dog={
    name:"simba",
    age:4,
    breed:"Golden retriver"
}
console.log("Dog:",myDog);

interface cat extends animal{
    breed:string
}
let myCat:cat={
    name:"chintu",
    age:1,
    breed:"persian"
}
console.log("Cat:",myCat);


interface hasEngine {
    engine: string;
}

interface hasWheels {
    wheels: string;
}

interface Car extends hasEngine, hasWheels {
    brand: string;
    model: string;
}
let mycar: Car = {
    engine: "YES",
    wheels: "4",
    brand: "BMW",
    model: "X5"
};

console.log(mycar);

