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

function insertHead(head,val){
    let newNode=new Node(val);
    newNode.next=head;
    return newNode;
}
function insertTail(head,val){
    let temp=head;
    while(temp.next!=null) temp=temp.next;
    let newNode=new Node(val);
    temp.next=newNode;
    return head;
}

function insertatKthIndex(head,val,k){
    if(head==null){
        if(k==1) return new Node(val);
    }else if(k==1) return new Node(val,head);
    else{
        let temp=head;
        let c=0;
        while(temp!=null){
            c++;
            if(c==k-1){
                let newNode=new Node(val);
                newNode.next=temp.next;
                temp.next=newNode;
                break;
            }
            temp=temp.next;
        }
    }
    return head;
}
function insertatbeforeval(head,val,k){
    if(head==null){
        return null;
    }else if(head.data==k) return new Node(val,head);
    else{
        let temp=head;
        while(temp.next!=null){
            if(temp.next.data==k){
                let newNode=new Node(val);
                newNode.next=temp.next;
                temp.next=newNode;
                break;
            }
            temp=temp.next;
        }
    }
    return head;
}
head=insertHead(head,20);
head=insertTail(head,50);
head=insertatKthIndex(head,55,6);
head=insertatbeforeval(head,44,6);
printLL(head);
