//18.write a program to check a number is palindrome or not
function ispal(str) {
    let reverseStr=str.split("").reverse("").join("");
    if (reverseStr===str){
        console.log("true");
    } else{
        console.log("false");
    }
    }
    
    ispal("level");
    ispal("ajay");

//19.write a program to remove duplicate from array[30,45,60,20,30,55]
 var arr=[30,45,60,20,30,55];
function removeduplicates (arr) {
 return arr.filter( (item,index)=>arr.indexOf(item)===index);
    }
console.log(removeduplicates(arr));
//1.the "var" and "fuinction" are known as_declaration statements

//2.which of these is a correct output for the javascript code below?


//3.which of these is known as the equality operator used for checking whether both the values are equal?-==
// explanation:the equality operator==is used to compare two values or expressions

4. function sayhi() {
    console.log(name);
    console.log(age);
    var name='lydia';
    let age=21;
}
sayhi();
// Ans:undefined and ReferenceError
// explanation:the alignment is not correct because we have to write var,let then we have to write cosole.log then it will understand
for (var i=0;i<3; i++) {
    settimeout(()=>console.log(i),1);
    
}







        


    