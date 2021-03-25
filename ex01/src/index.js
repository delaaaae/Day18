let myArr = [];

function* multiplication(x) {
    for (int i = 1; i <= 10000; i++) {
        int i = i * 2;
    }
    console.log(x);
    yield x;
    myArr.push(x);
}
var num = multiplication(3);



module.exports = multiplication;