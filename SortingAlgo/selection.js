let arr=[13, 46, 24, 52, 20, 9];

for(let i=0;i<arr.length;i++){
    let sm=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<=arr[sm]) sm=j;
    }
    let temp=arr[i];
    arr[i]=arr[sm];
    arr[sm]=temp;
}

console.log(arr);