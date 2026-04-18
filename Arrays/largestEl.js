let arr = [8, 5, 30, 90, 4, 11, 0];

function largets(arr) {
    let large = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) large = arr[i];
    }

    console.log(large);
}

// largets(arr);

function seclargest(arr){
    let large=0;
    let slarge=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            slarge=large;
            large=arr[i];
        }
        if(arr[i]>slarge && arr[i]<large) slarge=arr[i];
    }
    console.log(slarge);
}

seclargest(arr);