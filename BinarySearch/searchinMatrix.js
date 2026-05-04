let mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
let target = 7;
let n = mat.length;
let m = mat[0].length;

let st = 0;
let end = (n * m) - 1;

while (st <= end) {
    let mid = Math.floor((st + end) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;
    if (mat[row][col] > target) end = mid - 1;
    else if (mat[row][col] < target) st = mid + 1;
    else return true;

}



// function findx(mat,row,tar){
//     let st=0,end=m-1;
//     while(st<=end){
//         let mid=Math.floor((st+end)/2);
//         if(mat[row][mid]<tar) st=mid+1;
//         else if(mat[row][mid]>tar) end=mid-1;
//         else return mid;
//     }
//     return -1;
// }

// for(let i=0;i<n;i++){
//     let idx=findx(mat,i,target);
//     if(idx!==-1){
//         console.log(i,idx);
//         break;
//     }
// }


// when column wises sorted 
// let mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
// let target = 7;
let n = mat.length;
let m = mat[0].length - 1;

let i = 0, j = m;
while (i < n && j >= 0) {
    if (mat[i][j] > target) j--;
    else if (mat[i][j] < target) i++;
    else {
        console.log(i, j);
        break;
    }
}

