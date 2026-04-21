// let arr=[11, 11, 11, 11, 12, 12, 12, 12, 12];
// let n=arr.length;
// let freq=0;

// for(let i=1;i<arr.length;i++){
//     if(arr[i]==arr[i-1]){
//         freq+=1;

//     }else{
//         freq=1;
//     }
//     if(freq>n/2){
//         console.log(arr[i]);
//         break;
//     }
    
// }


//mores algorithm

// let arr=[1,2,2,1,1,2,1,2,1];

// let freq=0;
// let ans=0;
// for(let i=0;i<arr.length;i++){
//     if(freq==0){
//         ans=arr[i];
//     }
//     if(ans==arr[i]) freq++;
//     else freq--;
// }
// return ans;

    let nums=[3,3,2,2,1,1,1,1,1,1,2]
    // let freq=0;
    // let num=0;
    // for(let i=0;i<nums.length;i++){
    //      if(freq==0) num=nums[i];
    //      if(num==nums[i]) freq++;
    //      else freq--;
    // }

    
    let map=new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
        
    }
    let ans=0;
    let n=nums.length-1;
    for(let [key,value] of map){
        if(value>n/2){
            ans=key;
            break;
        }
    }
    console.log(ans);