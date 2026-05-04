let mat = [[10,20,15],[21,30,14],[7,16,32]]

let n=mat.length;
let m=mat[0].length-1;
function findmax(mat,mid,n,m){
    let max=-1;
    let idx=-1;
    for(let i=0;i<n;i++){
        if(mat[i][mid]>max){
            max=mat[i][mid];
            idx=i;
        }
    }
    return idx;
}
let st=0;
let end=m;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    let max=findmax(mat,mid,n,m);
    let left=mid>0 ? mat[max][mid-1] : -1;
    let right=mid<m ? mat[max][mid+1]:-1;
    if(mat[max][mid]<left) end=mid-1;
    else if(mat[max][mid]<right) st=mid+1;
    else return [max,mid]; 
}
return [-1,-1];