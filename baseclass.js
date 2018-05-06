var Job=function(){
    this.pays=true;
};

//prototype method
Job.prototype.print=function(){
    console.log(this.pays?'please hire me':'no thank you');
}

//subclass
var TechJob=function(title,pays){
    //call the base class
    Job.call(this);
    this.title=title;
    this.pays=pays;
};

TechJob.prototype=Object.create(Job.prototype);
TechJob.prototype.constructor=TechJob;

TechJob.prototype.print=function(){
    console.log(this.pay?this.title +"job is greate, please hire me":' I would rather learn javascript');
}

var softwarePosition=new TechJob('Javascript Programmer',true);

console.log(softwarePosition.print());


