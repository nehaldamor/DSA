const data=[95,103,50,23,70,2,30,100,23,21,1]
 for(let i=0;i<data.length;i++){
  for(let j=0;j<data.length;j++){
    if(data[j]>data[j+1]){
      let temp=data[j];
      data[j]=data[j+1];
      data[j+1]=temp;
    }
  }
 }
 console.log(data);
