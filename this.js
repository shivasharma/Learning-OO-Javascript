var obj={
    
  val:"Hi There"  ,
  
  printVal: function(){
      console.log(this.val);
  }
    
};

var obj2={
    val:"Whats up"
};

obj2.val=obj.printVal;
var print=obj.printVal.bind(obj2);
print();
obj.printVal();