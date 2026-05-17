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

function insertHeadinDLL(head,val){
    let temp=new Node(val);
    temp.next=head;
    head.prev=temp;
    return temp;
}

function insertTailDLL(head,val){
    let temp=head;
    while(temp.next){
        temp=temp.next;
    }
    let newnode=new Node(val);
    temp.next=newnode;
    newnode.prev=temp;
    return head;
}

function insertatkthPlace(head,val,k){
    let temp=head;
    if(head==null) return new Node(val);
    let c=0;
    while(temp){
        c++;
        if(c==k){
            let newnode=new Node(val);
            let prev=temp.prev;
            let next=temp.next;
            newnode.next=temp;
            newnode.prev=prev;
            prev.next=newnode;
            temp.prev=newnode;
            break;
        }
        temp=temp.next;
    }
    return head;
}

head=insertHeadinDLL(head,20);
head=insertTailDLL(head,50);
head=insertatkthPlace(head,60,3);
printLL(head); 

