// //18. write a program to check a number is palindrome or not
// function palindromes(str){
//     let reverseStr = str.split("").reverse("").join("");
//     if (reverseStr === str) {
//         console.log("It is a palindrome");
//     }else{
//         console.log("It is not a Palindrome");
//     }
// }

// palindromes("1223221");
// palindromes("90209");

// // // 19. write a program to remove duplicate from array [30,45,60,20,30,55]
// var array = [30,45,60,20,30,55];
// function removedup(array){
//     return array.filter((item,index)=>array.indexOf(item)===index);
// }
// console.log(removedup(array));

//1. The ” var” and “function” are known as _____________.

//1. Ans: declaration statements.

//2. Which of these is correct output

//2. Ans: HeyThere

// string X = "Hey";
// string Y = "There";
// alert(X+Y);

//3. Which of these is known as the Equility operator used for checking whether both the values are equal?

//3. Ans: == The equality operator is used for checking if two values are equal, === is used for checking two different datatypes are equal or not

//4. Output of the program

// function sayHi(){
// console.log(name);
// console.log(age);
// var name = "Lydia";
// let age = 21;
// }

// sayHi();

//4. Ans: Undefined and ReferenceError, because var and let cannot access the console.log(name) and console.log(age).

//5. Output of the program

// for(var i=0; i<3; i++){
//     setTimeout(() => console.log(i),1);
// }
// for(let i=0; i<3; i++){
//     setTimeout(() => console.log(i),1);
// }

//5. Ans: 3 and 0 1 2   

//6. Output of the program

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const lydia = new Person('Lydia','Hallie');
// const sarah = Person('Sarah','Smith');

// console.log(lydia);
// console.log(sarah);

//6. Ans: Person{firstName: "Lydia", lastName: "Hallie"} and undefined because we need to meantion new for sarah also or else it cannot access sarah

//7. output for the program

// function sum(a, b){
//     return a + b;   
// }   
// sum(1, '2');

//7. Ans: NaN

//8. output for the program

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

//8. Ans: 0 2 2 
//since we have used post increment the value wont change at 1st console output, after we have used pre increment so it adds 1 for pre increment and 1 for post increment

//9. output for the program

// var num = 8;
// var num = 10;

// console.log(num);

//9. Ans: 10
//Javascript is a loosly typed language i,e it is not strict with syntax if we declare another num it choose new num value previous num value is ignored

//10. Output for the program

// const obj = {a:'one', b: 'two', a:'three'};
// console.log(obj);

//10. Ans: {a: 'three', b: 'two'}
//Javascript is a loosly typed language i,e it is not strict with syntax if we declare another a: value it choose new a: value previous a: value is ignored

//11. Output of code 

// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

//11. Ans: undefined
//we have mentioned text outside the function so it is not able to access. The text mentioned inside the function should be above the console.log(text);

//15. Output of this code
// var length = 10;
// function fn() {
//     console.log(this.length);
// }
// var obj = {
//     length: 5,
//     method: function(fn){
//         fn();
//         arguments[0]();
//     }
// };

// obj.method(fn, 1);

//15. Ans: 10 2

//16. what would following code return

// console.log(typeof typeof 1);

//16. Ans: It would return String type because it is used to check what type of data type is used

//13. What is call apply bind explain this with the help of example.

// var user = 
// {
//     name: "user_name",
//     show:function()
//     {
//         console.log(this.name)
//     }
// }
// user.show()
// var user2 = {name: "first"}
// var person = {name: "last"}

// user.show.call(user2)
// user.show.apply(person)

// let newfun = user.show.bind(person);

// console.log(newfun());

//14. Explain hoisting with example

// console.log(a,b);
// var a=1,b=2;
// console.log(a,b);

//14. Ans: We can use the variable before it has been declared is called hoisting.

//17. write a progroam to delete employee whose age is 18 

// data=[
//     {
//         id:1,
//         age:40
//     },
//     {
//         id:2,
//         age:50
//     },
//     {
//         id:3,
//         age:18
//     },
//     {
//         id:4,
//         age:20
//     }
// ]
// console.log(data);
// for(i of data){
//     if(i['age']==18){
//         let index=data.indexOf(i);
//         data.splice(index,1);
//     }
// }
// console.log(data);

//17. Ans: The for loop runs through the data and the given if condition checks if the age is 18 then the splice method removes the data of age 18 by our condition

//12. Write program to call the getUsers then print users using callback, promise.

// function getUsers(callback){
//     console.log("Users who are in data base are:");
//     setTimeout(()=>
//     {
//         users=([
//         {
//             id:529,
//             name:"User_name",
//             age:22
//         },
//         {
//             id:530,
//             name:"User_name2",
//             age:25
//         }]);
//         console.log("Got the users from data base");
//         callback(users);
//     },2000);
// }
// function usersare(users)
// {
//     console.log("Printing the users")
//     for(i of users)
//     {
//         console.log(i);
//     }
// }
// getUsers(usersare);

// Function which calls inside the function i.e parameter which can be called later use is called callback which does not block the execution mechanism due to time taking process of one function

//promise

function getUsers(){
    console.log("Users who are in database are:");
    return new Promise(function(resolve,reject){
        setTimeout(()=>
        {
            users=[
                {
                    id:529,
                    name:"User_name",
                    age:22
                },{
                    id:530,
                    name:"User_name2",
                    age:25
                }
            ]
            console.log("Got the users from data base");
            resolve(users);
        },5000);
    });
}
function usersare(users)
{
    console.log("Printing the users")
    for(i of users)
    {
        console.log(i);
    }
}
getUsers().then(function(result){
    usersare(result);
}).catch(function(error){
    console.log(error);
    console.log("Error getting the data");
})

//for the promise the execution mechanism is as given, it must fulfill or it gets rejected by using excepton handling mechanism, default will be pending state. This is the difference between callback and promise.





