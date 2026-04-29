let nums=[1,2,2,3];
let x=2;


function uppperbound(nums, x) {
    let st = 0;
    let end = nums.length-1;

    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] > x) end=mid-1;
        else st=mid+1;
    }
    return end+1;
}

console.log(uppperbound(nums,x));