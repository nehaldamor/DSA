class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,2,3,4,5];
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
function findsizell(head){
    let s=0;
    while(head!=null){
        s++;
        head=head.next;
    }
    return s;
}
function removenthnode(head,n){
    let temp=head;
    let e=findsizell(head)-n;
    if(head!=null &&  e==0) head=head.next;
    console.log(e);
    while(temp!=null){
        e--;
        if(e==0){
            let dum=temp.next;
            temp.next=temp.next.next;
            dum.next=null;
            break;
        }
        temp=temp.next;
    }
    return head;
}

function removenth(head,n){
    let fast=head;
    for(let i=0;i<n;i++) fast=fast.next;
    if(fast==null) return head.next;
    let slow=head;
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    let dummy=slow.next;
    slow.next=slow.next.next;
    dummy.next=null;
    return head;
}
let head=arrToLL(arr);
// head=removenthnode(head,1);
head=removenth(head,5);
printll(head);
