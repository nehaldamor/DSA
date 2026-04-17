const data=[23,33,43,53,63]
  const pos=2
  for(let i=pos;i<data.length;i++){
    data[i]=data[i+1]
  }
  data.length=data.length-1
  console.log(data)
