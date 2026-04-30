let nums=[7, 7, 7, 7, 13, 11, 12, 7];
let m=2;
let n=2;
let d=7;
let c=0;
let ans=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]<=d){
        c++;
        if(c==n){
            ans++;
            c=0;
        }
    }else{
        c=0;
    }
    // if(ans==m) return;
}

console.log(ans);