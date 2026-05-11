class Node {
     constructor(data,next,prev) {
        this.data = data;
        this.next = next;
        this.prev=prev;
    }
}
let arr = [1, 2, 3, 4, 5, 6];
function arrToDLL(arr) {
    let head = new Node(arr[0]);
    let tail = head;
    let prev=head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i],null,prev);
        prev.next=newNode
        prev=newNode;

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
function printRLL(head) {
    let temp = head;
    while (temp) {

        console.log(temp.data);
        temp = temp.prev;

    }
}
let head = arrToDLL(arr);

printLL(head); 

