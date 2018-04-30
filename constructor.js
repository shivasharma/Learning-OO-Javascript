function Fruit(name,color){
    console.log("Object created by constructor");
    
    this.type=function(){
        console.log("This is a fruit");
    }
    
    this.name=name;
    this.color=color;
}

var orange=new Fruit("Orange","Orange");

orange.type();
console.log(orange);