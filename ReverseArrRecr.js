let data=[10,2,3,4,5]
  let temp;
  function rec(data,start,end){
    console.log(data)
      if(start<=end){
        temp=data[start];
        data[start]=data[end];
        data[end]=temp;
        rec(data,start+1,end-1)
      }
      
  }
  rec(data,0,data.length-1)
