let n=6;
let c=3;

function generateorw(n,c){
    let res=1;
    for(let i=0;i<c;i++){
        res=res*(n-i);
        res=res/(i+1); 
       }
       return res;
} 
function generatenrow(n){
    let ans=[];
    let res=1;
    ans.push(res);
    for(let i=1;i<n;i++){
        res=res*(n-i);
        res/=i;
        ans.push(res);
    }
    return ans;
}
generatenrow(6);
let ans=[];
for(let i=1;i<=n;i++){
    ans.push(generatenrow(i));
}
console.log(ans);
