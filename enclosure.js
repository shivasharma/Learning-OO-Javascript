//Enclosures

//Can access the varaiable of outer function and its varaible, global //variable


function showName(firstName,lastName){
    var nameIntro="your name is ";
    
    function makeFullName(){
        return nameIntro+  firstName + " " + lastName;
    }
    return makeFullName();
    console.log(showName("Shiva", "sharma"))
}
