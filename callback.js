var list =[5,8,9,2,7,6,3,1,4];

functin callback(list){
    var newList=[];
    for(var i=0;i<list.length;i++){
        if(list[i]<5)
            newList.push(list[i])
    }
    return newList;
}

function filter(list,callback){
    return callback(list);
}

var filtered=filter(list,callback);

console.log(filtered)