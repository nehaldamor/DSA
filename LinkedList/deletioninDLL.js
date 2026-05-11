class Node {
     constructor(data,next,prev) {
        this.data = data;
        this.next = next;
        this.prev=prev;
    }
}
let arr = [1, 2, 3, 4, 5, 6];
function arrToLL(arr) {
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
let head = arrToLL(arr);

function deleteheadDLL(head){
    if(head==null ||  head.next==null) return null;
    head=head.next;
    head.prev=null;
    return head;
    
}

function deletetailDLL(head){
    let temp=head;
    if(temp==null || temp.next==null) return null;
    while(temp.next.next){
        temp=temp.next;
    }
    let previ=temp.next;
    previ.prev=null;
    temp.next=null;
    return head;
}

function deletekthDLL(head,k){
    let temp=head;
    if(head==null) return null;
    let c=0;
    while(temp){
        c++;
        if(c==k){
            let prev=temp.prev;
            let next=temp.next;
            if(prev==null && next==null) return null;
            else if(prev==null){
                head=head.next;
                head.prev=null;
                break;
            }else if(next==null){
                prev.next=null;
                temp.prev=null;
                break;
            }else{
                prev.next=next;
                next.prev=prev;
                temp.prev=null;
                temp.next=null;
                break;

            }
        }
        temp=temp.next;
    }
    return head;

}

// head=deleteheadDLL(head);
// head=deletetailDLL(head)
head=deletekthDLL(head,6)
printLL(head);

