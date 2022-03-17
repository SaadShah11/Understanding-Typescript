//================number, string and boolean
function add(n1: number, n2: number, statement:string, proceed:boolean){
    if(proceed){
        console.log(n1+n2);
    }else{
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
let statement = 'Result is: ';
let proceed = true;

add(number1, number2, statement, proceed);

//================OBJECTS=======================
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "saad",
    age:24,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

//This code is same as

const person1 = {
    name: "saad",
    age: 24
}

//Typescript automatically determines types for all elemenets inside object and any other variables, we can also 

//================ARRAYS================
//usage is same as inside or outside object

const hobbies = ['Sports', 'Cooking'];

let favourtites :string[]; //initializing an array which will contain strings, array of strings, you cannot store anything other than array of strings in this variable.
//use :any[] type to allow any value in array

for(const hobby of person.hobbies){
    console.log(hobby.toLowerCase())//typescript allows this because it knows that the array is of strings
    //hobby.map()//we get error here because .map can be used on arrays not strings
}

//===================TUPLES=================
//tuples are arrays with fixed number of elemenets and fixed type

let role: [number, string] = [2, 'author'];
role.push('admin');//push() is an exception which is allowed in tuples so this will work
//role[1]=10;//replacing 2nd element with a number, we get error
//role = [0, "saad", "admin"]//we get error now when assinging 3 elements, push is the exception which adds a new element


//==================ENUM======================
//enum assigns labels to numbers, similar to objects
enum Role { ADMIN, READ_ONLY, AUTHOR };

let rolee = Role.ADMIN;
//to change starting number (index) from 0 use the below code
enum Role1 { ADMIN=5, READ_ONLY, AUTHOR };
//we can also use anything as a number i.e. 
enum Role2 { ADMIN='ADMIN', READ_ONLY  = 100, AUTHOR = 200 };

//===================ANY======================
//use any as a type to store anything, very flexible.
//But any takes away all advantages of typescript, it just becomes vanilla javascript


