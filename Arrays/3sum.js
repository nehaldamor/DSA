let nums = [1,2,0,1,0,0,0,0];
let ans=[];
let n=nums.length;
nums.sort((a,b)=>a-b);
for(let i=0;i<n-2;i++){
    if(i>0 && nums[i]===nums[i-1]) continue;
    let j=i+1;
    let k=n-1;
    while(j<k){
        let sum=nums[i]+nums[j]+nums[k];
        if(sum===0){
            ans.push([nums[i],nums[j],nums[k]]);
            while(j<k && nums[j]==nums[j+1]) j++;
            while(k>j && nums[k]==nums[k-1]) k--;
            j++;
            k--;
        }else if(sum<0) j++;
        else k--;
    }
}

console.log(ans);