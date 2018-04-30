// create object using object literal 
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};
circle.draw();

//create object using object factory
function createCircel(radius) {

    return {
        radius: radius,
        draw: function () {
            console.log('draw');
        }
    };
}

 const circel1=new createCircel(1);
 circel1.draw();

 //Constructor function
 function Circel(radius){
     this.radius=radius;
     this.draw=function(){
        console.log('draw');
     }
 }

const another= new circle(1);

