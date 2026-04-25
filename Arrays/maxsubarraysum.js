// let nums = [3, -2, 5, -1];

// let ind=[0,0];
// let mx=0;
// let sum=0;
// let ans=[];
// for(let i=0;i<nums.length;i++){
//     sum=0;
//     for(let j=i;j<nums.length;j++){
//         sum+=nums[j];
//         if(sum>mx){
//             mx=sum;
//             ind[0]=i;
//             ind[1]=j;
//         }
//     }
// }

// for(let i=ind[0];i<=ind[1];i++){
//     ans.push(nums[i]);
// }
// console.log(ans);


let nums = [-2, -3, -7,-2,5,1,2,,-10, -4]   ;

let max=nums[0];
let sum=nums[0];
let end=0;
let st=0;
let temp=0;
let ans=[];
for(let i=1;i<nums.length;i++){
    sum+=nums[i];
    if(sum<nums[i]){
        sum=nums[i];
        temp=i;
    };
    if(sum>max){
        max=sum;
        st=temp;
        end=i;
    }
}
for(let i=st;i<=end;i++){
    ans.push(nums[i]);
}

console.log(ans);
