let arr=[1,2,3,5,4,7,8];
let n=arr.length+1;
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
let tsum=n*(n+1)/2;
console.log(tsum-sum);