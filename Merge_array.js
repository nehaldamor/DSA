const data=[23,33,43,53,63]
  const data2=[44,933,2,3,12,45]
  let data3=[]
  
  for(let i=0;i<data.length;i++){
    data3[i]=data[i]
  }
  for(let i=0;i<data2.length;i++){
    data3[data.length+i]=data2[i]
  }
  console.log(data3)
