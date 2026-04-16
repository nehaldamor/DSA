let money = 100;
let tapple = 0;
function buyapple(x) {

    if (x > 0) {
        console.log(`i have ${x} money and ${tapple} apple`)
        tapple++

        buymore(x)
    }
    else {
        console.log("I dont have a money", tapple)
    }
}
function buymore(x) {
    buyapple(x - 10)
}
let price = 10
buyapple(money)