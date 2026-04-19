let arr=[1,2,3,4,5,6,7];
let k=3;

var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
    if(n==1) return;
    rev(nums,0,n-1);
    rev(nums,0,k-1);
    rev(nums,k,n-1);
};

function rev(nums,st,end){
    while(st<=end){
        let temp=nums[st];
        nums[st]=nums[end];
        nums[end]=temp;
        st++;
        end--;
    }
}

rotate(arr,k);
console.log(arr);