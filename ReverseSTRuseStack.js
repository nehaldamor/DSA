let data=[];
let pos=data.length;
// let newdata= data.split("")

function push(x){
  data[pos]=x;
  pos++;
  // let newdat = data.split('')
}
function pop(){
  let lastremoveditem=data[pos-1]
  pos--;
  data.length=pos;
  return lastremoveditem;
}
function revers(item){
  for(let i=0;i<item.length;i++){
    push(item[i])
  }
  for(let i=0;i<item.length;i++){
    item[i]=pop()
  }
}
let str="DEVENDRA"
str=str.split('')
revers(str)
console.log(str)
