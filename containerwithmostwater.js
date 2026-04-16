let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function cwmw(height) {
    let mh = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let w = j - i;
            let h = Math.min(height[i], height[j]);
            mh = Math.max(mh, w * h);
        }
    }

    return mh;
}

// console.log(cwmw(height));
//two pointer
function cwmt2(height){
    let mh=0;
    let l=0;
    let r=height.length-1;

    while(l<r){
        let w=r-l;
        let h=Math.min(height[l],height[r]);
        mh=Math.max(mh,w*h);
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return mh;
}

console.log(cwmt2(height));