let nums = [-1, 0, 3, 5, 9, 12], target = 9

function findX(nums, target) {
    let st = 0;
    let end = nums.length;

    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end=mid-1;
        else st=mid+1;
    }
    return -1;
}
console.log(findX(nums,target));