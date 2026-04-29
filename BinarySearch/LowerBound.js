let nums=[3,5,8,15,19];
let x=9;


function lowerbound(nums, x) {
    let st = 0;
    let end = nums.length;

    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] > x) end=mid-1;
        else st=mid+1;
    }
    return st;
}

console.log(lowerbound(nums,x));