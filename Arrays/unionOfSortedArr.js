let arr1=[1,2,3,3,4,5,5,6];
let arr2=[3,3,4,4,5,6,7,8];
let temp=[];
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j] ){
        if(temp.length==0 || arr1[i]!=temp[temp.length-1]){
            temp.push(arr1[i]);
        } 
        i++;
    }else if(arr1[i]>arr2[j] ){
       if(temp.length==0 || arr2[j]!=temp[temp.length-1]){
         temp.push(arr2[j]);
       }
       j++;
    }
}

while(i<arr1.length){
    if(temp.length==0 || arr1[i]!=temp[temp.length-1]){
            temp.push(arr1[i]);
    } 
    i++;
}

while(j<arr2.length){
    if(temp.length==0 || arr2[j]!=temp[temp.length-1]){
         temp.push(arr2[j]);
       }
       j++;
}

console.log(temp);