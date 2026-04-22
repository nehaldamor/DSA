let arr=[2,1,5,4,3,0,0];
let idx=-1;
for(let i=arr.length-2;i>=0;i--){
    if(arr[i]<arr[i+1]){
        idx=i;
        break;
    }
}

if(idx==-1){
    rev(arr,0);
    return
};

for(let i=arr.length-1;i>idx;i--){
    if(arr[i]>arr[idx]){
        let temp=arr[i];
        arr[i]=arr[idx];
        arr[idx]=temp;
        break;

    }
}
rev(arr,idx+1);
function rev(arr,idx){
    let st=idx;
    let end=arr.length-1;
    while(st<=end){
        let temp=arr[st];
        arr[st]=arr[end];
        arr[end]=temp;
        st++;
        end--;
    }
}

console.log(arr);