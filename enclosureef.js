function personName(firstName){
    var nameIntro="The person is";
    
    function lastName(thelastName){
        console.log(nameIntro + firstName + " " + thelastName);
    }
    return lastName;
}
var myName=personName("Shiva");
console.log(myName("Sharma"));

function theLocation(){
  var city="MD"  
  
  return {
      get:function(){console.log(city);},
      set:function(newCity){city=newCity;}
  }
}
myPlace=theLocation();
myPlace.get();
myPlace.set("Baltimore");
myPlace.get();
