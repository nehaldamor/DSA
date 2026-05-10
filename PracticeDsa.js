class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}
let arr = [1, 2, 3, 4, 5, 6];
function arrToLL(arr) {
    let head = new Node(arr[0]);
    let tail = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        tail.next = newNode;
        tail = newNode;
    }
    return head;
}

function printLL(head) {
    let temp = head;
    while (temp) {

        console.log(temp.data);
        temp = temp.next;

    }
}
let head = arrToLL(arr);

printLL(head);
