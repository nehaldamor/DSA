let arr = [1, 2, 3, 4, 5, 7];
let target = 7;

function pairSum(arr) {
    let st = 0;
    let end = arr.length - 1;
    let ans = [];
    while (st <= end) {
        if (arr[st] + arr[end] == target) {
            ans.push(st);
            ans.push(end);
            return ans;
        } else if (arr[st] + arr[end] < target) {
            st++;
        } else {
            end--;
        }
    }
}

console.log(pairSum(arr));