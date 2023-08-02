//  now udnerstanding var and let and const understanding 

// var are = globel scope
//let are = block scope
//const are = block scope 

//block scope===local scope

// block scope understanding with let and var and const

{
    var a = 10;
}
console.log(a); //10

{
    let a = 10
}
console.log(a);  //ReferenceError: a is not defined

{
    const a = 10
}
console.log(a);   //ReferenceError: a is not defined

//function scope understanding with let and var and const
var a = 10
function krunal(){
    console.log(a);

}
krunal() //10 

const a = 10

function krunal(){
    console.log(a);
}
krunal() //10

let a =10
function krunal(){
console.log(a);
}
krunal()  //10

//notes:- function scope accsess by three variable let and var and const 

// now understanding reassign and redec.
// now watch reassign 
var a = 10

{
    a= 9
}

console.log(a); //9  

let a = 9

{
    a = 8
}
console.log(a);  //8

const a = 9

{
    a = 7
}

console.log(a); // TypeError: Assignment to constant variable.

//redec

var a = 10

{
    a = 3
}
 
console.log(a);  //3

let a = 10

{
     let a = 12;
}
console.log(a);  //12

const a = 10
{
    const a =12
}
console.log(a);  //10

//now undersatnding reassign and redec.

//reassign  understanding with all threee variable

var a = 10
    
     a = 2
    
     console.log(a);

//2

let a = 10

    a = 2 

   console.log(a);

//2

const a = 10

 a = 2

 console.log(a);



// redec. understanding with all threee variable

var a = 10

var a = 2
console.log(a);

//2

let a = 10

let a = 2

console.log(a);

//SyntaxError: Identifier 'a' has already been declared

const a = 10;

const a = 2;

console.log(a);


//SyntaxError: Identifier 'a' has already been declared



