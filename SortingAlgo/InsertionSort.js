
let data=[3,1,5,2,922,1,55];
function insertion(data){
    for(let i=0;i<data.length;i++){
        let j=i;
        while(j>=0 && data[j]<data[j-1]){
            let temp=data[j];
            data[j]=data[j-1];
            data[j-1]=temp;
            j--;
        }
    }
}
insertion(data)
console.log(data);