let str="42068";
for(let i=str.length-1;i>=0;i--){
    if(str.charAt(i)%2!==0){
          console.log(str.slice(0,i+1))
          break
    };
}