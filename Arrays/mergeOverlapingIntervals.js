 let nums=[[4,7],[1,4]];
 
     nums.sort((a,b)=>a[0]-b[0]);
    let n=nums.length;
    let ans=[];
    let st=nums[0][0];
    let end=nums[0][1];
    for(let i=1;i<n;i++){
        if(nums[i][0]<=end){
            end=Math.max(nums[i][1],end);
        } else {
            ans.push([st,end]);
            st=nums[i][0];
            end=nums[i][1];
        }
    }
    ans.push([st,end]);
    console.log(ans);