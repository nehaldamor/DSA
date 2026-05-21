class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let arr = [2,1,1,2,0,1,2,0];
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
function sort0s1s(head){
    let cz=0,co=0,ct=0;
    let temp=head;
    while(temp!=null){
        if(temp.val===0) cz++;
        else if(temp.val===1) co++;
        else ct++;
        temp=temp.next;
    }

    temp=head;
    while(temp!=null){
        if(cz>0){
            temp.val=0;
            cz--;
        }else if(co>0){
            temp.val=1;
            co--;
        }else if(ct>0){
            temp.val=2;
            ct--;
        }
        temp=temp.next;
    }
    return head;
}

function sort0s1s2s(head){
    let oneh=new Node(-1);
    let one=oneh;
    let zeroh=new Node(-1),zero=zeroh;
    let twoh=new Node(-1),two=twoh;
    let temp=head;
    while(temp!=null){
        if(temp.val===0){
            zero.next=temp;
            zero=temp;
        }else if(temp.val===1){
            one.next=temp;
            one=temp;
        }else{
            two.next=temp;
            two=temp;
        }
        temp=temp.next;
    }

    zero.next=oneh.next;
    one.next=twoh.next;
    two.next=null;
    return zeroh.next;
    
}

// head=sort0s1s(head);
head=sort0s1s2s(head);
printLL(head);
