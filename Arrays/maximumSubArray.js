let arr=[3,-4,5,4,-1,7,-8];

function maxsum(arr){
    let msum=0;

for(let i=0;i<arr.length;i++){
    let csum=0;
    for(let j=i;j<arr.length;j++){
        csum+=arr[j];
        msum=Math.max(msum,csum);
    }
}

return msum;
}

// console.log(maxsum(arr))

//Kadane Alogorithm

function kadane(nums){
    let mx=nums[0];
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
        sum=Math.max(nums[i],nums[i]+sum);
        mx=Math.max(sum,mx);
    }
    return mx;
}

console.log(kadane(arr));