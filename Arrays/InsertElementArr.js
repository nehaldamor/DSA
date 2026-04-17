const data=[23,33,43,53,63]
const pos=2
const el=30

for(let i=data.length-1;i>=0;i--){
  if(i>=pos){
    data[i+1]=data[i]
    if(i===pos){
      data[i]=el
    }
  }
}
console.log(data)
