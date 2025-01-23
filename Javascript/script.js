console.log("JS file linked successfully!")
console.log(23+43+4)
console.log("23+43+4")


//variables
// 3 ways - var, let and const
var fullName="Shraddha";
console.log(fullName);
console.log("Hello, my name is",fullName);
var fullName="Gudage"
console.log("Hello, my updated name is",fullName);

var college;
console.log(college);   //undefined
//console.log(year);      //not defined //error, so js stp executing it.

// you cannot redeclare let, but u reassigning it
let car = "mercedis"
console.log("my car is:",car);

car="BMW"
console.log("my new car is:",car);

//const - remain constant

const pi = 3.14;

let name="Shraddha";
let $function=54;

let PI=3.145667;

console.log(pi,PI);

//use camelCasing naming convention to name a variables.
let myFirstJob = "EyGds";

// Primitive Data types in JS
//1. String --> "technology" or "Consultant"
//2. Number --> 23,100
//3. Bigint --> 12234211344322
//4. Boolean --> true or false
//5. Undefined --> No values has been defined
//6. Null -->    empty value
//7. Symbol --> this creates a unique value
//8. Object --> collection of key value pairs

let fun = true;
console.log(typeof fun);

console.log(typeof 23);

console.log(typeof "Microsoft");

console.log(typeof browser); // undefined

let university = null;
console.log(typeof university); //object

let student;
console.log(typeof student);

student = "Engg student"
console.log(typeof student);


///////////////////////////////
//Basic operators
// Math operations

const now = 2023;
const ageRishi = now -1991;
const ageShraddha = now-2000;

console.log("Age of Rishi",ageRishi);
console.log("Age of Shraddha",ageShraddha);

console.log(ageRishi, ageRishi/10, 2**3);

let firstName = "Saipan"
let lastName = "Naikwadi"
const myFullName = firstName + lastName;
console.log(myFullName);

console.log(16%3);
console.log(16/3); 

//Assignment Operator
let x = 10+15;
x+=10;
x-=10;
x*=10;
x/=10;
console.log("value of x is: ",x);
x++;
console.log("value of x is: ",x);
x--;
console.log("value of x is: ",x);

//comparison operator
//return a Boolean

console.log(ageRishi>ageShraddha);
console.log(ageRishi<ageShraddha);

const average = (ageRishi+ageShraddha)/2;
console.log(average);

//Problem 1

/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculatedusing the formula: BMI = mass / height ** 2 = mass / (height * height).(mass in kg and height in meter).1. Store Mark's and John's mass and height in variables2. Calculate both their BMIs using the formula (you can even implement both versions)3. Create a boolean variable 'markHigherBMI' containing information about whether Markhas a higher BMI than John.TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg andis 1.76 m tall.GOOD LUCK 😀*/// const massMark = 78;// const heightMark = 1.69;// const massJohn = 92;// const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69; 
const massJohn = 92;
const heightJohn = 1.95;

BMIMark = massMark/(heightMark**2);
BMIJonh = massJohn/(heightJohn**2);

const markHigherBMI = (BMIMark>BMIJonh);
console.log(BMIMark,BMIJonh,markHigherBMI);


////////////////////////////////////////
// Strings and Templete Literals

firstName = "Jonas";
lastName = "teacher";
const birthYear = 1991;
const year = 2023;

const person = 
    "I'am" + firstName + " a " + (year-birthYear) + " year old " + myFirstJob + " Employee" + "!";

console.log(person);

var person1 = 
    `I'am  ${firstName}  a  ${year-birthYear}  year old  ${myFirstJob} Employee !`;

    console.log(person1);

let para = "This is a new para\n\
This is a new line";

let newPara = `This is a new para
This is a new line
This is another line
next line
last line`;

console.log(para);
console.log(newPara);


//////////////////////////////////////

const age=17;

if(age>18){
    console.log("You can start Driving.")
}
else{
    const yearsLeft = 18- age;
    console.log(`You are too young, wait for another ${yearsLeft} years to drive`);
}

// problem 2
/*Use the BMI example from Challenge #1, 
and the code you already wrote, and improve it:
1. Print a nice output to the console, 
saying who has the higher BMI. 
The message can be either "Mark's BMI is higher than John's!"
or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉GOOD LUCK 😀*/

if(BMIMark>BMIJonh){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJonh})!`);
}
else{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJonh})!`);
}


//Type conversion

const inputYear ='1991';

console.log(Number(inputYear)+18);
console.log(Number('jonhs'));
console.log(typeof NaN);  //number

let num= '23'+12;
console.log(typeof num); //string

console.log('23' + '20'-3); //10
console.log('23'/'2');  //11.5

let n ='1'+1; //11
n-=1;  //10
console.log(n);
