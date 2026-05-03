// let nums1 = [1, 3, 4, 7, 10, 12];
// let nums2 = [2, 3, 6, 15];

// let n = nums1.length + nums2.length;

// let n1 = 0, n2 = 0;
// let l1 = nums1.length - 1, l2 = nums2.length - 1;

// let num1 = Math.floor((n - 1) / 2);
// let num2 = Math.floor(n / 2);

// let c = 0;
// let val = 0;
// let m1 = 0, m2 = 0;
// while (n1 <= l1 && n2 <= l2) {
//     if (nums1[n1] <= nums2[n2]) {
//         val = nums1[n1++];
//     } else {
//         val = nums2[n2++];
//     }
//     if (c === num1) m1 = val;
//     if (c === num2) m2 = val;

//     c++;
// }

// while (n1 <= l1) {
//     val=nums1[n1++];
//      if (c === num1) m1 = val;
//      if (c === num2) m2 = val;
//     c++;
// }

// while (n2 <= l2) {
//     val=nums2[n2++];
//      if (c === num1) m1 = val;
//      if (c === num2) m2 = val;
//     c++;
// }

// if(n%2==0){
//     console.log((m1+m2)/2);
// }else console.log(m2);


let nums2 = [1, 3, 4, 7, 10, 12];
let nums1 = [2, 3, 3, 15];
let n1=nums1.length;
let n2=nums2.length

let low=0;
let high=n1;
while(low<=high){
    let cut1=Math.floor((low+high)/2);
    let cut2=Math.floor((n1+n2+1)/2)-cut1;

    let l1=cut1===0?-Infinity:nums1[cut1-1];
    let l2=cut2===0?-Infinity:nums2[cut2-1];
    let r1=cut1===n1?Infinity:nums1[cut1];
    let r2=cut2===n2?Infinity:nums2[cut2];

    if(l1<=r2 && l2<=r1){
        if((n1+n2)%2===0){
            // return (Math.max(l1,l2)+Math.min(r1,r2))/2
            console.log((Math.max(l1,l2)+Math.min(r1,r2))/2)
        }else {
           console.log(Math.max(l1,l2))
        }
        break;
    }else if(l1>r2){
        high=cut1-1;
    }else low=cut1+1;

}
