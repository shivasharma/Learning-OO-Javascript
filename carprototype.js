const Car=function(){};

Car.prototype=function(){
    print(){
        return 'I am a car';
    }
};

const ToyCar=function(){};

ToyCar.prototype=Object.create(Car.prototype);

ToyCar.prototype.print=function(){
    return ' I am a toy car';
};

const ToyTransformer=function(){
    ToyTransformer.prototype=Object.create(ToyCar.prototype);
    ToyTransformer.prototype.print=function(){
        return 'I am a toyTrasformer';
    }
}

const toyota= new Car();
const legoCar= new ToyCar();
const optimusPrime= new ToyTransformer();

console.log()