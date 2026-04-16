let data = [3, 1, 5, 2, 9, 6, 8];
for (i = 0; i < data.length; i++) {
    let min = i;
    for (let j = i + 1; j < data.length; j++) {
        if (data[j] < data[min]) {
            min = j;
        }
    }
    let temp = data[min];
    data[min] = data[i];
    data[i] = temp;
    console.log(data);
}