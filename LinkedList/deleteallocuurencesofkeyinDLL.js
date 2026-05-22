class Node {
     constructor(data,next,prev) {
        this.data = data;
        this.next = next;
        this.prev=prev;
    }
}
let arr = [1,2,3,4,5];
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

function findpairsinDLL(head,n){
    let left=head;
    let right=head;
    while(right.next!=null){
        right=right.next;
    }
    let ans=[];
    while(left.data<=right.data){
        let sum=left.data+right.data;
        if(sum===n){
            ans.push([left.data,right.data]);
            left=left.next;
            right=right.prev;
        }else if(sum<n){
            left=left.next;
        }else right=right.prev;

    }
    return ans;
}
let head = arrToDLL(arr);
let ans=findpairsinDLL(head,5);
console.log(ans);
printLL(head); 

