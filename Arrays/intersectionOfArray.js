     let arr1=[1,2,2,1];
     let arr2=[2,2];

     let i=0;
     let j=0;
     let temp=[];
     while(i<arr1.length && j<arr2.length){
        if(arr1[i]==arr2[j]){
            temp.push(arr1[i]);
            i++;
            j++;
        }else{
            if(arr1[i]<arr2[j]) i++
            else j++;
        }
     }

     console.log(temp);