let arr=[7,1,5,3,2,4];

let min=arr[0];
let max=0;

for(let i=1;i<arr.length;i++){
    if(arr[i]>min){
        max=Math.max(max,arr[i]-min);
    }
    if(arr[i]<min) min=arr[i];
}

console.log(max);