let nums = [3,3,7,7,10,11,11];

function findsingle(nums) {
    let st = 1;
    let n=nums.length;
    if(n==1) return nums[0];
    if(nums[0]!=nums[1]) return nums[0];
    if(nums[n-1]!=nums[n-2]) return nums[n-1];
    let end = n- 2;
    
    while (st <= end) {
        let mid = Math.floor((st + end) / 2);
        if ( nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid];
        else if((mid%2!=0 && nums[mid]==nums[mid-1])|| (mid%2==0 && nums[mid]==nums[mid+1])) st=mid+1;
        else end=mid-1;
    }
}

console.log(findsingle(nums));