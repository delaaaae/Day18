function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}

const iterator = myGenerator(6, 7, 8);
generatorArray = [];

for(generatorArray of iterator){
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

module.exports = { generatorArray, myGenerator };