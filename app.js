let a = 5;

console.log(a);

let myGLobal = 10;

function fun2() {
    let output = "";
    if (typeof myGLobal != "undefined") {
        output += "myGlobal: " + myGLobal;
    }
    console.log(output);
}

fun2();
