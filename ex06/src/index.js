let rockStar = new Map([
    ["aritst", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = [...rockStar.keys()];


console.log(newRock);

module.exports = { rockStar, newRock };
