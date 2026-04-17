 let nums=[1,2,3,4];

 function product(nums){
    let ans=[];
    for(let i=0;i<nums.length;i++){
       let pr=1;
        for(let j=0;j<nums.length;j++){
            if(i!=j) pr*=nums[j];
        }
        ans.push(pr);
    }
    return ans;
    
 }
// console.log(product(nums));

function p2(nums){
    let n=nums.length
    let ans=new Array(n);
    let prefix=new Array(n);
    let suffix=new Array(n);
    prefix[0]=1;
    suffix[n-1]=1;
    for(let i=1;i<nums.length;i++){
        prefix[i]=prefix[i-1]*nums[i-1]
    }

    for(let i=nums.length-2;i>=0;i--){
        suffix[i]=suffix[i+1]*nums[i+1];
    }

    for(let i=0;i<nums.length;i++){
        ans[i]=prefix[i]*suffix[i];
    }
    return ans;
}

// console.log(p2(nums));

function p2(nums){
    let ans=new Array(nums.length)
    ans[0]=1;
    for(let i=1;i<nums.length;i++){
        ans[i]=nums[i-1]*ans[i-1]
    }
    let suffix=1;
    for(let i=nums.length-2;i>=0;i--){
        suffix*=nums[i+1];
        ans[i]*=suffix;
    }
    return ans;
}

console.log(p2(nums))