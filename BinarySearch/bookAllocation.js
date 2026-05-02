let nums=[12,34,67,90];

let k=2;
if(nums.length<k) return -1;
let max=-Infinity;
let sum=0;
for(let i=0;i<nums.length;i++){
    max=Math.max(max,nums[i]);
    sum+=nums[i];
}
function check(nums,pages,s){
    let st=1;
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
        if(sum+nums[i]<=pages){
            sum+=nums[i];
        }else{
            sum=nums[i];
            st++;
        }
    }
    return st<=s;
}
let st=max;
let end=sum;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    if(check(nums,mid,k)) end=mid-1;
    else st=mid+1;
}
console.log(st);