let nums=[1,2,-3,0,-4,-5,-1,-5];
let ans=nums[0];
let maxp=nums[0];
let minp=nums[0];

for(let i=1;i<nums.length;i++){
    let curr=nums[i];
    if(curr<0){
        let temp=maxp;
        maxp=minp;
        minp=temp;
    }
    maxp=Math.max(curr,maxp*curr);
    minp=Math.min(curr,curr*minp);
    ans=Math.max(maxp,ans);
}

console.log(ans);