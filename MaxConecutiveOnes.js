    let nums = [1,1,0,1,1,1]
    let mx=0;
    let tc=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==1) {
            mx=Math.max(mx,tc);
            tc=0;
            continue;
        }
        tc++;
    }
    mx=Math.max(mx,tc);

    console.log(mx);