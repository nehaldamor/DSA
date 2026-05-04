let mat=[[0,0,1],[0,1,1],[0,0,0]]
let n=3,m=3;
function findfirst(mat,row){
    let st=0;
    let end=m;
    while(st<=end){
        let mid=Math.floor((st+end)/2);
        if(mat[row][mid]>=1) end=mid-1;
        else st=mid+1;
    }
    return st;
}
let mx=0;
let idx=-1;
for(let i=0;i<mat.length;i++){
    let first=findfirst(mat,i);
    if(((m-first))>mx) {
        mx=((m-first));
        idx=i;
    }
   
}

console.log(mx);
console.log(idx);