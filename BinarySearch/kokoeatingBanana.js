let piles=[3,6,7,11];
let n=piles.length;
let h=8;
let mx=-1;
for(let i=0;i<n;i++){
    mx=Math.max(mx,piles[i])
}

let st=1;
let end=mx;
function check(piles,bananaperh){
    let ans=0;
    for(let i=0;i<piles.length;i++){
        ans+=Math.ceil(piles[i]/bananaperh);
    }
    return ans;
}
while(st<=end){
    let mid=Math.floor((st+end)/2);
    let chektime=check(piles,mid);
    if(chektime<=h){
        end=mid-1;
    }else st=mid+1;
}

console.log(st);