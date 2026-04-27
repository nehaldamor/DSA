let nums = [5,4,3,2,1];
function mergesort(nums, st, end) {
    let c=0;
    if(st>=end) return 0;
    let mid = Math.floor((st + end) / 2);
    c+=mergesort(nums, st, mid);
    c+=mergesort(nums, mid + 1, end);
    c+=merge(nums, st, mid, end);
    return c;
}

let ans=mergesort(nums,0,nums.length-1);
function merge(nums, st, mid, end) {
    let temp = [];
    let st1 = st;
    let c=0;
    let st2 = mid + 1;
    while (st1 <= mid && st2 <= end) {
        if (nums[st1] > nums[st2]) {
            temp.push(nums[st2]);
            c += mid - st1 + 1;
            st2++;
        } else {
            temp.push(nums[st1]);
            st1++;
        }
    }
    while (st1 <= mid) {
        temp.push(nums[st1]);
        st1++;
    }
    while (st2 <= end) {
        temp.push(nums[st2]);

        st2++;
    }
    for(let i=st;i<=end;i++){
        nums[i]=temp[i-st];
    }
    return c;
}

console.log(ans);