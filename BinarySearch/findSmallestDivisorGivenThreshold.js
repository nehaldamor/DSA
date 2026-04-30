let nums=[1,2,5,9];
let th=6;
let max=-Infinity;
for(let i=0;i<nums.length;i++){
    max=Math.max(max,nums[i]);
}

function checkk(nums,divisor,th){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=Math.ceil(nums[i]/divisor);
    }
    return sum<=th;
}
let st=1;
let end=max;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    let check=checkk(nums,mid,th);
    if(check){
        end=mid-1;
    }else st=mid+1;;
}
console.log(st);