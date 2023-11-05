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
    var myObj = {
        name: {
            firstName: 'Faysal',
            middleName: 'Hasan',
            lastName: 'Mahi'
        },
        age: 17
    };
    var age = myObj.age, nickName = myObj.name.lastName;
    console.log(nickName);
    var biography = {
        name: 'Faysal',
        age: 17,
        class: null
    };
    var myName = 'Faysal';
    var add = function (num, num3) { return num + num3; };
    var meDetails = function (value) {
        if (typeof value === 'number') {
            console.log('This is a number');
        }
        else if (typeof value === 'string') {
            var _a = value.split(' '), res = _a[0], str = _a[1];
            console.log(res);
        }
        else {
            console.log('Hello you have provieded wrong input');
            console.log('Hello wrong input');
            console.log('Hello wrong');
        }
    };
    meDetails("1000kms^s");
    var me = function (meg) {
        throw new Error('Galti se mistake hogaya');
    };
}
