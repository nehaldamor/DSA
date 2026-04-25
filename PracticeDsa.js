let nums=[3,1,-2,-5,2,-4];
let pos=0;
let neg=1;
let n=nums.length;
let ans=new Array(nums.length).fill(0);
for(let i=0;i<n;i++){
    if(nums[i]>0){
        ans[pos]=nums[i];
        pos+=2;
    }else{
        ans[neg]=nums[i];
        neg+=2;
    }
}
console.log(ans);