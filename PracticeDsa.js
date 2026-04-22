// let mat=[[1,1,1],[1,0,1],[1,1,-1]];

// let n=mat.length;
// let m=mat[0].length;

// function makerow(i,m){
//     for(let j=0;j<m;j++){
//         if(mat[i][j]!==0) {
//             mat[i][j]="NA";
//         }
//     }
// }

// function makecol(j,n){
//     for(let i=0;i<n;i++){
//         if(mat[i][j]!==0){
//             mat[i][j]="NA";
//         }
//     }
// }

// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         if(mat[i][j]==0){
//             makecol(j,n);
//             makerow(i,m);
//         }
//     }
// }

// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         if(mat[i][j]=="NA"){
//             mat[i][j]=0;
//         }
//     }
// }


// console.log(mat);



let mat=[[1,1,1],[1,0,1],[1,1,-1]];
let n=mat.length;
let m=mat[0].length;
let row=new Array(n).fill(0);
let col=new Array(m).fill(0);

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(mat[i][j]==0){
            row[i]=1;
            col[j]=1;
        }
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(row[i]==1 || col[j]==1){
            mat[i][j]=0;
        }
    }
}

console.log(mat);
