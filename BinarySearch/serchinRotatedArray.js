let nums=[4,5,6,7,0,1,2];
let x=3;

function search(nums,x){
    let st=0;
    let end=nums.length-1;
    while(st<=end){
        let mid=Math.floor((st+end)/2);
        if(nums[mid]===x) return mid;
        if(nums[mid]>=nums[st]){
            if(nums[st]<=x && x<nums[mid]) end=mid-1;
            else st=mid+1;
        }else{
            if(nums[mid]<=x && nums[end]>=x) st=mid+1;
            else end=mid-1;
        }
    }
    return -1;
}

console.log(search(nums,x));