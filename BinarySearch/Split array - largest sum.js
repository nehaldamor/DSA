let nums=[1,2,3,4,5];
let k=2;
if(nums.length<k) return -1;
let sum=0;
let max=-Infinity;
for(let i=0;i<nums.length;i++){
    sum+=nums[i];
    max=Math.max(max,nums[i]);
}
function check(nums,tsum,k){
    let csubarr=1;
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]+sum<=tsum) sum+=nums[i];
        else{
            csubarr++;
            sum=nums[i];
        }
    }
    return csubarr<=k;
}
let st=max;
let end=sum;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    if(check(nums,mid,k)) end=mid-1;
    else st=mid+1;
}

console.log(st);