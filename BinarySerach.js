let data=[2,5,8,33,45];
let start=0;
let find=45;
let end=data.length-1;
let position=undefined;

while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(data[mid]===find){
        position=mid;       
        break;
    }
    else if(data[mid]<find){
        start=mid+1;
    }
    else if(data[mid]>find){
        end=mid-1;
    }
   
   
}
if(position==undefined){
    console.log("not found");
}
else{
    console.log(`element available on position ${position}`);
}


