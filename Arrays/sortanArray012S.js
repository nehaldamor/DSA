let nums=[2,0,2,1,1,0];

let left=0;
let mid=0;
let high=nums.length-1;
while(mid<=high){
    if(nums[mid]==0){
        let temp=nums[mid];
        nums[mid]=nums[left];
        nums[left]=temp;
        mid++;
        left++;
    }else if(nums[mid]==1){
        mid++;
    }else{
        let temp=nums[mid];
        nums[mid]=nums[high];
        nums[high]=temp;
        high--;
    }
}

console.log(nums);