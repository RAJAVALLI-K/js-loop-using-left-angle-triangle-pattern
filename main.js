// left angle triangle pattern using

let value = 5;
let num = "";
for (let i = 1; i <= value; i++) {
    for (let j = 0; j < i; j++) {
        num += "*";
        // console.log(num);
    }
    num += "\n";
}
console.log(num);
