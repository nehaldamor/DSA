class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let arr = [9,9,9,9];
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

function addone(head){
  
    head=reverseLL(head);
      let temp=head;
      let carry=1;
      while(temp!=null){
        temp.val=carry+temp.val;
        if(temp.val<10){
            carry=0;
            break;
        }else{
            temp.val=0;
            carry=1;
        }
        temp=temp.next;
      }
      head=reverseLL(head);
      if(carry>0){
        let newnode=new Node(1);
        newnode.next=head;
        return newnode;
      }
      head=reverseLL(head);
      return head;
}

head=addone(head);
printLL(head);
