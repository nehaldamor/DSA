let nums = [2, 2 , 3 , 3 , 3 , 3 , 4];
let x = 3;


function lowerbound(nums, x) {
    let st = 0;
    let end = nums.length-1;

    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] >= x) end = mid - 1;
        else st = mid + 1;
    }
    return st;
}

function uppperbound(nums, x) {
    let st = 0;
    let end = nums.length - 1;

    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] > x) end = mid - 1;
        else st = mid + 1;
    }
    return st;
}
console.log(uppperbound(nums,x));
console.log(lowerbound(nums,x));
let ans=uppperbound(nums,x)-lowerbound(nums,x)
console.log(ans);