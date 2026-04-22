let arr=[16,17,4,3,5,2];
let ans=[];

let max=arr[arr.length-1];
ans.push(max);
for(let i=arr.length-2;i>=0;i--){
    if(arr[i]>=max){
        ans.unshift(arr[i]);
        max=arr[i];
    }
}

console.log(ans);