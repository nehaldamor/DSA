let nums=[3,1,-2,-5,2,-4];
    let ans=new Array(nums.length);
    let pos=0;
    let neg=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            ans[neg]=nums[i];
            neg+=2;
        }else{
            ans[pos]=nums[i];
            pos+=2;
        }
    }
    console.log(ans);