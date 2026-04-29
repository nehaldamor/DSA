let nums=[3,3,3];
let x=3;


function findfirst(nums,x){
    let st=0;
    let end=nums.length-1;
    let ans=-1;
    while(st<=end){
        let mid=Math.floor((st+end)/2);
        if(nums[mid]===x){
            ans=mid;
            end=mid-1;
        }else if(nums[mid]<x) st=mid+1;
        else end=mid-1;
    }
    return ans;
}
function findsec(nums,x){
    let st=0;
    let end=nums.length-1;
    let ans=-1;
    while(st<=end){
        let mid=Math.floor((st+end)/2);
        if(nums[mid]===x){
            ans=mid;
            st=mid+1;
        }else if(nums[mid]<x) st=mid+1;
        else end=mid-1;
    }
    return ans;
}

console.log( [findfirst(nums,x),findsec(nums,x)]);
