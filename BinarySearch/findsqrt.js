let n=27;
let m=3;
let st=1;
// if(n==1) return 1;
let end=n;
let ans=-1;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    let pro=1;
    for(let i=1;i<=m;i++){
        pro*=mid;
        if(pro>n) break;
    };
    if(pro==n){
        ans=mid;
        break;
    }else if(pro<n) st=mid+1;
    else end=mid-1;
}

console.log(ans);