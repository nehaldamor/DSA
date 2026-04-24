let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let n = mat.length;
let m = mat[0].length;
let ans = [];
let left = 0;
let right = m - 1;
let top = 0;
let bot = n - 1;


while (left <= right && top <= bot) {

    for (let i = left; i <= right; i++) {
        ans.push(mat[top][i]);
    }
    top++;

    for (let i = top; i <= bot; i++) {
        ans.push(mat[i][right]);
    }
    right--;

    if (top <= bot) {
        for (let i = right; i >= left; i--) {
            ans.push(mat[bot][i]);
        }
        bot--;
    }

    if (left <= right) {
        for (let i = bot; i >= top; i--) {
            ans.push(mat[i][left]);
        }
        left++;
    }

}

console.log(ans);