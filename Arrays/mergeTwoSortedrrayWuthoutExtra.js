let nums1 = [8,0,0,0], m = 1, nums2 = [2,5,6], n = 3;

let idx=nums1.length-1;
let st1=m-1;
let st2=n-1;

while(st1>=0 && st2>=0){
    if(nums1[st1]<=nums2[st2]){
        nums1[idx]=nums2[st2];
        st2--;
        idx--;
    }else{
        nums1[idx]=nums1[st1];
        st1--;
        idx--;
    }
}
while(st2>=0){
        nums1[idx]=nums2[st2];
        st2--;
        idx--;
}
while(st1>=0){
        nums1[idx]=nums1[st1];
        st1--;
        idx--;
}
console.log(nums1);