let arr = [1, 2, 3, 5, 6, 7, 7];

function bs(arr) {
    let st = 0;
    let end = arr.length - 1;
    let f = 7;

    while (st <= end) {
        let mid = (st + end) / 2;
        if (arr[mid] == f) return mid;
        else if (arr[mid] < f) st = mid + 1;
        else end = mid - 1;
    }
}

console.log(bs(arr));

