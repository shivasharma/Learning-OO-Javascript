myFunc();

var expession=function(){
    console.log('Hi from my expression');
}

function myFunc(){
    console.log("Hi from my func");
}
expression(); 

//Function Best Pratice


//variable first

var x=10;

//function next

function print (input){
    
    //variable first
    var x0;
    
    function log(){
        //log stuff
    }
    //run coe
    console.log(input);
}
print(10);

function (firstnumber,secondNumber){
    var result=firstnumber + secondNumber;
    return result;
}
var sum=add(10,20)

var Person=function(){
    var firstName="SHiva";
    
    var sayHello=function(){
        console.log(firstName);
    }
    return {
        sayHello:sayHello
    }
}();