let weights=[1,2,3,4,5,6,7,8,9,10];
let days=5;
let max=-Infinity;
let sum=0;
for(let i=0;i<weights.length;i++){
    sum+=weights[i]
    max=Math.max(max,weights[i]);
}

let st=max;
let end=sum;
function check(nums,capacity,days){
    let d=1;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(sum+nums[i]>capacity){
            d++;
            sum=nums[i];
        }else sum+=nums[i];
    }
    return d<=days;
}
while(st<end){
    let mid=Math.floor((st+end)/2);
    if(check(weights,mid,days)){
        end=mid-1;
    }else st=mid+1;
}

console.log(st);