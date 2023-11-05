{
// // Data type testing
// let myName : string = 'Faysal';
// let age : number = 17;
// let isDeveloper : boolean = true;
// let ego : null = null;
// let female : undefined = undefined;

// // Array Testing
// let friends : [string, string, string, number, number] = ['Faysal', 'Hassan', 'Mahi', 16, 40];

// // Object Testing
// let friendsObj : {
//     eduQualification : 'Student';
//     fathersName? : string;
//     name : string;
//     age : number;
//     isMan : boolean
// } = {
//     isMan: true,
//     age: 17,
//     name: "Faysal",
//     eduQualification : 'Student'
// }

// // Multiple data types testing in on array using the tuple rule
// let tupleTest : [string, number, null, boolean, undefined] = ["Faysal", 16, ego, true, female];

// // Function testing
// function add( num1: number, num2 : number) : number {
//     return num1 + num2;
// }
// add(56, 49)
// // Arrow function
// let sum = (num1 : number, num2 : number) : number => num1 + num2;

// // Map loop
// let names : string[] = ['Faysal', 'Hassan', 'Mahi'];
// let newName : string[] = names.map((friend : string) : string => friend)

// // Some deferent operation with array
// let biography : string[] = ["Faysal", 'Brahmanbaria'];
// let additional : string[] = ["Class 11", '2'];
// let errorLess = [...biography, additional];

// // Some deferent operation with Object
// let myDetails = {
//     age: 17,
//     addAge(age : number): number{
//         return this.age + age;
//     },
//     name: "Faysal",
//     eduQualification : 'Student'
// }

// // Spread operation
// // Object
// let spreadObj = {...friendsObj, ...myDetails};
// // array
// let spreadArr = [...friends, ...biography]

// type User = {
//     name: string[];
//     age: number
// }

let myObj = {
    name: {
        firstName: 'Faysal',
        middleName: 'Hasan',
        lastName: 'Mahi'
    },
    age: 17
}

let {age, name: {lastName : nickName}} = myObj;
console.log(nickName)


// Type alias
type User = {
    name: string;
    age : number;
    class: null;
}


let biography : User = {
    name: 'Faysal',
    age : 17,
    class: null
}

type Me = string;
let myName : Me = 'Faysal';

type Func = (num1: number, num2: number) => number;

let add : Func = (num, num3) => num + num3;


type Developer = "Front end" | "Back end";
type LevelTwo = "Front end" & "Expert Developer";


let meDetails = ( value : unknown) => {
    if(typeof value === 'number'){
        console.log('This is a number');
    }else if(typeof value === 'string'){
        let [res, str] = value.split(' ')
        console.log(res)
    }else{
        console.log('Hello you have provieded wrong input')
        console.log('Hello wrong input')
        console.log('Hello')
    }
}

meDetails("1000kms^s")

let me = (meg: string) : never=> {
    throw new Error('Galti se mistake hogaya')
    
}



}