let nums=[100,4,200,1,3,2];

let set=new Set();

for(let i=0;i<nums.length;i++){
    set.add(nums[i]);
}
let mx=0;
for(let num of set){
    if(!set.has(num-1)){
        let curr=num;
        let tc=1;
        while(set.has(curr+1)){
            tc++;
            curr++;
        }
        mx=Math.max(mx,tc);
    }
}

console.log(mx);