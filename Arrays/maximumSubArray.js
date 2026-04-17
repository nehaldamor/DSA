let arr=[3,-4,5,4,-1,7,-8];

function maxsum(arr){
    let msum=0;

for(let i=0;i<arr.length;i++){
    let csum=0;
    for(let j=i;j<arr.length;j++){
        csum+=arr[j];
        msum=Math.max(msum,csum);
    }
}

return msum;
}

// console.log(maxsum(arr))

//Kadane Alogorithm

function kadane(arr){
    let msum=Number.MIN_VALUE;
    let csum=0;
    for(let i=0;i<arr.length;i++){
      csum+=arr[i];
      msum=Math.max(csum,msum);
      if(csum<0) csum=0;

    }
    return msum;
}

console.log(kadane(arr));