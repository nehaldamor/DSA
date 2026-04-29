let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

function peak(nums) {
    let n = nums.length;
    
    let st = 1;
    let end = n - 2;
    if (n == 1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[n-1]>nums[n-2]) return n-1;
    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return nums[mid];
        else if ( nums[mid] > nums[mid - 1]) st = mid + 1;
        else end = mid - 1;
    }
}

console.log(peak(nums));