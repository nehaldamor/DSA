let nums=[1,2,3];

var removeDuplicates = function(nums) {
    let i=0;
    let j=1;
    let n=nums.length;
    while(i<n && j<n){
        if(nums[i]!=nums[j]){
            nums[i+1]=nums[j]
            i++;
        }
        j++;
    }
    return i+1;
};

console.log(removeDuplicates(nums))
console.log(nums);