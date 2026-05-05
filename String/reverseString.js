let str="example  good a";
let i=str.length-1;
let ans="";
while(i>=0){
    while(i>=0 && str.charAt(i)===" ") i--;
    let j=i;
    while(i>=0 && str.charAt(i)!==" ") i--;

    if(j>=0) ans+=str.slice(i+1,j+1)+" ";
}

console.log(ans.trim());