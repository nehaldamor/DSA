let mat = [[1, 5, 7,9, 11],
[2, 3,4, 5, 10],
[9,10,12,14,16]];


let n=mat.length;
let m=mat[0].length;

let min=mat[0][0];
let max=mat[0][m-1];

for(let i=1;i<n;i++){
    min=Math.min(min,mat[i][0]);
    max=Math.max(max,mat[i][m-1])
}
function countless(mat,check){
    let st=0;
    let end=mat.length;
    while(st<end){
        let mid=Math.floor((st+end)/2);
        if(mat[mid]<=check) st=mid+1;
        else end=mid;
    }
    return st
}
let st=min;
let end=max;
let count=0;
while(st<end){
    let mid=Math.floor((st+end)/2);
    for(let i=0;i<n;i++){
        count+=countless(mat[i],mid);
    }
    if(count<Math.floor(((m*n)+1)/2)) st=mid+1;
    else end=mid;
}

console.log(st);