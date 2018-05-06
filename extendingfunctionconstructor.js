let Mamal=function(legs){
 this.legs=legs
};

Mamal.prototype={
    walk(){
        return 'walking';
    },sleep(){
        return 'sleeping';
    }

};

let Bat=function(legs, isVegetrian){

    Mamal.call(this,legs);
    this.isVegetrian=isVegetrian;
};

Bat.prototype=Object.create(Mamal.prototype);
Bat.prototype.constructor=Bat;
Bat.prototype.fly=function(){
    return 'I am flying';
}

let fruitBat= new Bat(4,true);
console.dir(fruitBat.fly())
console.dir(fruitBat.sleep())