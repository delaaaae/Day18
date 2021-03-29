function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}

function* insideGenerator1() {
    for (x = 1; x <= 5; x++) {
        yield x;
        yield x;
    }
}

function* insideGenerator2() {
    for (x = 10; x <= 15; x++) {
        yield x;
        yield x;
    }

}

function* insideGenerator3() {
    for (x = 6; x <= 9; x++) {
        yield x;
        yield x;
    }
}

var iterator = myGenerator();
fifteenArray = [];

for(this.fifteenArray of iterator){
    console.log(iterator.next().value);

}

module.exports = { fifteenArray, myGenerator };