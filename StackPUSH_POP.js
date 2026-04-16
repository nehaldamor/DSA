let data = [];
let curruntel = data.length;
let max = 5;
function push(el) {
  if (curruntel < max) {
    data[curruntel] = el
    curruntel++;

  }
  else {
    alert("Size is full")
  }

}

function pop() {
  if (curruntel <= 0) {

    alert("data is not found")
  }
  else {
    curruntel -= 1;
    data.length = curruntel;
  }
}

push(5)
push(5)
push(5)
push(5)
push(8)
pop()


console.log(data)
