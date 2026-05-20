class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let arr = [1, 2, 3, 4, 5,6];
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

let head = arrToLL(arr);

function printLL(head) {
    let temp = head;
    while (temp) {

        console.log(temp.data);
        temp = temp.next;

    }
}
function deletemidll(head){
    if(head==null || head.next==null) return null;
    let slow=head;
    let fast=head.next;

    while(fast.next!=null && fast.next.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    let dummy=slow.next;
    slow.next=slow.next.next;
    dummy.next=null;
    return head;
}
head=deletemidll(head);
printLL(head);


