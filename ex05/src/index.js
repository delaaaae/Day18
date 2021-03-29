let shoppingList = new Map([]);

    let arrKey = new Map([
    ["groceries", 'Banana'],
    ["groceries", 'Pineapple'],
    ["groceries", 'Pear'],
    ["groceries", 'Carrot'],
    ["groceries", 'Apple'],
    ]);

let arrValue = new Map([
    ["amount", 3],
    ["amount", 5],
    ["amount", 2],
    ["amount", 10],
    ["amount", 1,5]
]);



for(let value of arrKey.values()) {
    shoppingList.push(value);
    console.log(value);
};

for(let key of arrValue.keys()) {
    shoppingList.push(key);
    console.log(key);
};

for(let [key,value] of shoppingList.entries()){
    console.log(`${key[0]} : ${value[1]}`);
};
module.exports = { shoppingList, arrKey, arrValue };