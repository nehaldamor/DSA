// let arr = [10, 5, 2, 7, 1,-10];
// let mx = 0;
// let ts = 0;
// k = 15;
// for (let i = 0; i < arr.length; i++) {
//     ts = arr[i];
//     if (ts == k) {
//         mx = Math.max(mx, 1);
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//         ts += arr[j];
//         if (ts == k) {
//             mx = Math.max(mx, (j - i) + 1);
//         }
//     } 
// }

// console.log(mx);

 let arr = [10, 5, 2, 7, 1,-10];
let k = 15;

let mx=0;

let map=new Map();
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    if(sum==k) mx=i+1;

    
    if(map.has(sum-k)) {
        let len=i-map.get(sum-k);
        mx=Math.max(mx,len);
    }

    if(!map.has(sum)) map.set(sum,i)
}

console.log(mx);