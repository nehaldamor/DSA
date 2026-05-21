class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let arr = [1,2,3,4,5];
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
let newnode=new Node(20);
newnode.next=head.next.next;
function printLL(head) {
    let temp = head;
    while (temp) {

        console.log(temp.val);
        temp = temp.next;

    }
}
function findintersection(h1,h2){
    let temp1=h1;
    let temp2=h2;
    let l1=0;
    let l2=0;
    while(temp1!=null){
        l1++;
        temp1=temp1.next;
    }
    while(temp2!=null){
        l2++;
        temp2=temp2.next;
    }
    temp1=h1;
    temp2=h2;
    if(l1>l2){
        let d=l1-l2;
        while(d>0){
            temp1=temp1.next;
            d--;
        }
    }else{
        let d=l2-l1;
        while(d>0){
            temp2=temp2.next;
            d--;
        }
    }
    while(temp1!=null && temp2!=null){
        if(temp1===temp2) return temp1;
        temp1=temp1.next;
        temp2=temp2.next;
    }
    return null;
}
// head=sort0s1s(head);
head=findintersection(head,newnode);
printLL(head);
