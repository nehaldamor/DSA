let nums=[10, 1, 2, 7, 5];
let k=3;
nums.sort((a,b)=>a-b);
let st=1;
let end=nums[nums.length-1]-nums[0];
function possible(nums,dis,k){
    let countc=1;
    let last=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]-last>=dis){
            countc++;
            last=nums[i];
        }
        if(countc>=k) break;
    }
    return countc>=k;
    
}
while(st<=end){
    let mid=Math.floor((st+end)/2);
    if(possible(nums,mid,k)) st=mid+1;
    else end=mid-1;
}

console.log(end);