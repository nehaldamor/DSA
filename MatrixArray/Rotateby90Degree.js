let mat=[[1,2,3],[4,5,6],[7,8,9]];
let n=mat.length;
let m=mat[0].length;
let ans=new Array(n).fill(0).map(()=>new Array(m).fill(0));

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        ans[j][n-1-i]=mat[i][j];
    }
}

console.log(ans);

// let mat=[[1,2,3],[4,5,6],[7,8,9]];
// let n=mat.length;
// let m=mat[0].length;
// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         if(i<j){
//             let temp=mat[i][j];
//             mat[i][j]=mat[j][i];
//             mat[j][i]=temp;
//         }
//     }
// }

// for(let i=0;i<n;i++){
//     rev(mat,i);
// }

// function rev(mat,row){
//     let st=0;
//     let end=mat[row].length-1;
//     while(st<end){
//         let temp=mat[row][st];
//         mat[row][st]=mat[row][end];
//         mat[row][end]=temp;
//         st++;
//         end--;
//     }
// }
// console.log(mat);