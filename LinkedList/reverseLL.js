class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,2,3,4,5,6];
function arrToLL(arr){
    let head=new Node(arr[0]);
    let tail=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i]);
        tail.next=newNode;
        tail=newNode;
    }
    return head;
}

function printll(head){
    let temp=head;
    while(temp){
        console.log(temp.data);
        temp=temp.next;
    }
    
}

function reverseLL(head){
    let prev=null;
    let temp=head;
    while(temp!=null){
        let front=temp.next;
        temp.next=prev;
        prev=temp;
        temp=front;
    }
    return prev;;
}

function reverseRecursively(head){
    if(head==null || head.next==null) return head;

    let newhead=reverseRecursively(head.next);

    let front=head.next;
    front.next=head;
    head.next=null;
    return newhead;
}

let head=arrToLL(arr);
// printll(head);
// head=reverseLL(head);
head=reverseRecursively(head);
printll(head)

