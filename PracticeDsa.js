// let nums = [2, 1, 3, 5, 6];
// let multi=2;
// let n=5;
// for(let i=0;i<n;i++){
//     let minindex=0;
//     for(let j=1;j<nums.length;j++){
//         if(nums[j]<nums[minindex]){
//             minindex=j;
//         }
//     }
//     nums[minindex]*=multi;
// }

// console.log(nums);

const cluster=require('cluster');
const os=require('os');
const numCPUs=os.cpus().length;
console.log(numCPUs);