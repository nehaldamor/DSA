
let data=[3,1,5,2,922,1];
function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
            j--;
        }
    }
}
insertion(data)
console.log(data);