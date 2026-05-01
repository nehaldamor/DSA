let nums=[1,3,4,7,11];
let k=5;

let st=0;
let end=nums.length-1;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    let missing=nums[mid]-(mid+1);
    if(missing<k) st=mid+1;
    else end=mid-1;
}
console.log(st+k);