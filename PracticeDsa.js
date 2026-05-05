let str="4201568";
let mx="0";
for(let ch of str){
    if(ch%2!=0){
        if(ch>mx) mx=ch;
    }
}
console.log(mx);