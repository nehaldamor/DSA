let nums=[3, 4, 4, 7, 8, 10];
let x=8;


function floor(nums, x) {
    let st = 0;
    let end = nums.length-1;
    let ans=-1;
    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] <= x){
            ans=mid;
            st=mid+1;
        }
        else end=mid-1;
    }
    return nums[ans];
}

function ceil(nums,x){
    let st = 0;
    let end = nums.length-1;
    let ans=-1;
    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] <x){
            
            st=mid+1;
        }
        else{
            ans=mid;
            end=mid-1;
        };
    }
    return nums[ans];
}

console.log(floor(nums,x));
console.log(ceil(nums,x));
