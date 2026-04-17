let nums=[1,0,1]

// let i=0;
// let j=1;
// let n=nums.length;

// while(i<n && j<n){
//     if(nums[i]==0 && nums[j]!=0){
//         nums[i]=nums[j];
//         nums[j]=0;
//         i++;
//     }else if(nums[i]!=0) i++;
//     j++;
// }

let i=0;
for(let j=0;j<nums.length;j++){
    if(nums[j]!=0){
        nums[i]=nums[j];
        if(i!==j) nums[j]=0;
        i++;
    }
}

console.log(nums)
