// let nums=[4,1,2,1,2];
// let count=1;
// for(let i=0;i<nums.length;i++){
//     count=1;
//     for(let j=0;j<nums.length;j++){
//         if(i!=j && nums[i]==nums[j]){
//             count++;
//         }
//     }
//     if(count==1){
//         console.log(nums[i]);
//         break;
//     }
// }

let xor=0;
let nums=[1,1,2,3,3,4,4];
for(let i=0;i<nums.length;i++){
    xor^=nums[i];
}
console.log(xor);