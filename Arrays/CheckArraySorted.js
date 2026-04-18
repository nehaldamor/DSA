let arr=[1,3,6,4,7,9];

function check(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]) return false
    }
    return true;
}

console.log(check(arr));