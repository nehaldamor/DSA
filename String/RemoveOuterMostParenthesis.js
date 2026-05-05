let str="(()())(())(()(()))";

let ans="";
let count=0;
for(let ch of str){
    if(ch==="("){
        if(count>0){
            ans=ans+ch;
        }
        count++;
    }else{
        count--;
        if(count>0) ans=ans+ch;
    }
}
console.log(ans);