function conquer(arr, si, mid, ei) {
    let merged = [];
    let idx1 = si;
    let idx2 = mid + 1;
    let x = 0;

    // Merge the two subarrays into merged[]
    while (idx1 <= mid && idx2 <= ei) {
        if (arr[idx1] <= arr[idx2]) {
            merged[x] = arr[idx1];
            idx1++;
        } else {
            merged[x] = arr[idx2];
            idx2++;
        }
        x++;
    }

    // If there are remaining elements in the left subarray
    while (idx1 <= mid) {
        merged[x] = arr[idx1];
        idx1++;
        x++;
    }

    // If there are remaining elements in the right subarray
    while (idx2 <= ei) {
        merged[x] = arr[idx2];
        idx2++;
        x++;
    }

    // Copy the merged elements back into the original array
    for (let i = 0, j = si; i < merged.length; i++, j++) {
        arr[j] = merged[i];
    }
}

function divide(arr, si, ei) {
    if (si >= ei) {
        return;
    }
    // Correcting mid calculation to get an integer
    let mid = Math.floor(si + (ei - si) / 2);
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);
    conquer(arr, si, mid, ei);
}

let arr = [6, 3, 9, 5, 2, 8];
let n = arr.length;
divide(arr, 0, n - 1);
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
