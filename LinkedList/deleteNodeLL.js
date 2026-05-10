class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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

let head = arrToLL(arr);

function printLL(head) {
    let temp = head;
    while (temp) {

        console.log(temp.data);
        temp = temp.next;

    }
}
function deleteHeadinLL(head) {
    let temp = head;
    if (temp == null) return null;
    else temp = temp.next;
    return temp;;
}

function deleteTail(head){
    let temp=head;
    if(temp==null || temp.next==null) return null;
    while(temp.next.next!=null){
         temp=temp.next;
    }
    temp.next=null;
    return head;
}
function deleteInBetween(head,val){
    if(head==null) return head;
    if(head.data==val) return deleteHeadinLL(head);
    let temp=head;
    while(temp.next!=null){
        if(temp.next.data==val){
            if(temp.next.next==null) temp.next=null;
            else temp.next=temp.next.next;
            break;
        }
        temp=temp.next;
    }
    
    return head;
    
}

head = deleteHeadinLL(head);
head=deleteTail(head);
head=deleteInBetween(head,25);
printLL(head);


