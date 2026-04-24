// let nums = [3, 2, 3];
// let n = nums.length;
// let ans = [];
// let map = new Map();

// for (let i = 0; i < n; i++) {
//     if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
//     else map.set(nums[i], 1);
// }
// for (let [num, count] of map) {
//     if (count > (n / 3)) ans.push(num);
// }

// console.log(ans);

let arr=[3,3,4];
let n=arr.length;
let ans=[];
let el1=Infinity;
let el2=Infinity;
let counter1=0;
let counter2=0;

for(let i=0;i<n;i++){
    if(counter1==0 && arr[i]!=el2){
        counter1=1;
        el1=arr[i];
    }else if(counter2==0 && arr[i]!=el1){
        counter2=1;
        el2=arr[i];
    }
    else if(el1==arr[i]) counter1++;
    else if(el2==arr[i]) counter2++;
    else{
        counter1--;
        counter2--;
    }
}
let tc1=0;
let tc2=0;
for(let i=0;i<n;i++){
    if(arr[i]==el1) tc1++;
    else if(arr[i]==el2) tc2++;
}

if(tc1>n/3) ans.push(el1);
if(tc2>n/3) ans.push(el2);

console.log(ans);
