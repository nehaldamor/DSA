   let nums = [1,0,-1,0,-2,2], target = 0;
   nums.sort((a,b)=>a-b);
    let n=nums.length;
    let ans=[];
    for(let i=0;i<n;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
        for(let j=i+1;j<n;j++){
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            let k=j+1;
            let l=n-1;
            while(k<l){
                let sum=nums[i]+nums[j]+nums[k]+nums[l];
                if(sum>target) l--;
                else if(sum<target) k++;
                else{
                    ans.push([nums[i],nums[j],nums[k],nums[l]]);
                    while(k<l && nums[k]==nums[k+1])k++;
                    while(k<l && nums[l]===nums[l-1])l--;
                     k++;
                    l--;
                }
            }
        }
    }
    console.log(ans);