let arr = [4, 6, 2, 5, 7, 9, 1, 3, 8];

let low = 0;
let high = arr.length - 1;

function quickSort(arr, low, high) {
    if (low > high) return;
    let p = pivot(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);

}

function pivot(arr, low, high) {
    let i = low;
    let j = high;
    let pvt = arr[low];

    while (i < j) {
        while (arr[i] <= pvt && i <= high - 1) i++;
        while (arr[j] > pvt && j >= low + 1) j--;
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

quickSort(arr, low, high);
console.log(arr);