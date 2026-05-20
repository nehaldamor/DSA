class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let arr = [4,2,1,3];
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

        console.log(temp.val);
        temp = temp.next;

    }
}

function mergelists(l1,l2){
    let dummynode=new Node(-1);
    let temp=dummynode;
    while(l1!==null && l2!==null){
        if(l1.val<=l2.val){
            temp.next=l1;
            l1=l1.next;
        }else{
            temp.next=l2;
            l2=l2.next;
        }
        temp=temp.next;
    }
    if(l1!==null) temp.next=l1;
    else temp.next=l2;
    return dummynode.next;
}
function findmiddle(head){
    let slow=head;
    let fast=head.next;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}
function mergesort(head){
    if(head==null || head.next==null) return head;
    let middle=findmiddle(head);
    let left=head;
    let right=middle.next;
    middle.next=null;
     left=mergesort(left);
    right=mergesort(right);
    return mergelists(left,right);
}
head=mergesort(head);
printLL(head);
