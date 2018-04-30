var vegetable=function(){
    this.type="Veggie";
}

vegetable.prototype.print=function(){
    console.log(this.type + " is good for yor");
}

var carrot=new vegetable();

carrot.print();