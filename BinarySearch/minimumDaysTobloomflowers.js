let days=[7,7,7,7,13,11,12,7];

let m=3;
let k=2;
if(days.length<m*k) return -1;
let min=Infinity;
let max=-Infinity;
for(let i=0;i<days.length;i++){
    max=Math.max(max,days[i]);
    min=Math.min(min,days[i]);
}
function check(days,day){
    let c=0;
    let totalbucket=0;
    for(let i=0;i<days.length;i++){
        if(days[i]<=day){
            c++;
            if(c==k){
                totalbucket++;
                c=0;
            }
        }else c=0
    }
    return totalbucket>=m;
}

let st=min;
let end=max;
while(st<=end){
    let mid=Math.floor((st+end)/2);
    if(check(days,mid)){
        end=mid-1;
    }else st=mid+1;
}
console.log(st);