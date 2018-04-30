
var Cat=function(data){

    this.clickCount=ko.observable(data.clickCount)
    this.name=ko.observable(data.name);
    this.imgSrc=ko.observable(data.imgSrc);
    this.imgAttribution=ko.observable(data.imgAttribution);
    this.nickNames=ko.observableArray(data.nickNames);

    this.title=ko.computed(function(){
        var title;
        var clicks=this.clickCount();
        if(clicks<10){
            title='NewBorn';
        }else if(click<50){
            title='Infant';
        }else if(click<100){
            title='Child';
        }else if(click<200){
            title='Teen';
        }else if(click<500){
            title='Adult';
        }else{
            title='Ninja';
        }
        return title;       
    },this)

}

var ViewModel=function(){
 
    var self=this;
    self.catList=ko.observableArray([]);
   //var loadCats=new initialiCats();
   initialiCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    self.currentCat=ko.observable(self.catList()[0]);

    self.incrementCounter=function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
    };

    self.setCat=function(clickedCat){
        self.currentCat(clickedCat);
    }
}
ko.applyBindings(new ViewModel());