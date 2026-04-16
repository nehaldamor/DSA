
let data=[3,1,5,2,922,1];
function insertion(arr){
    let j;
    for(let i=1;i<arr.length;i++){
        let curr=arr[i];
        j=i-1;
        while(j>=0 && curr<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=curr;
    }
}
insertion(data)
console.log(data);