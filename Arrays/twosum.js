let nums=[2,7,11,15];
let target=9;
let ans=[];
let i=0;
let j=nums.length-1;

nums.sort((a,b)=>a-b);
while(i<j){
   let sum=nums[i]+nums[j];
   if(sum==target){
    ans.push(i);
    ans.push(j);
    break;
   }else if(sum>target) j--;
   else i++;
}

console.log(ans);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let map=new Map();

for(let i=0;i<nums.length;i++){
    let comp=target-nums[i];
    if(map.has(comp)){
        return [map.get(comp),i];
    }else{
        map.set(nums[i],i);
    }

}
};