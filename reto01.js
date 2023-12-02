function findFirstRepeated(gifts) {
    const obj = {};
    for (let i = 0; i < gifts.length; i++) {
        if (obj[gifts[i]]) {
            return gifts[i];
        }
        obj[gifts[i]] = 1;
        console.log(obj[gifts[i]]);
    }

    return -1
}

function findFirstRepeatedFind(gifts) {
    const obj = {};

    return gifts.find(val => {
        if (obj[val]) {
            return true;
        } else {
            obj[val] = 1;
        }
    }) || -1;
}

function findFirstRepeated(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        for (let j = i + 1; j < gifts.length; j++) {
            if (gifts[i] === gifts[j]) {
                return gifts[i];
            }
        }
    }

    return -1;
}

function findFirstRepeated(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        if (gifts.indexOf(gifts[i], i + 1) !== -1) {
            return gifts[i];
        }
    }
    return -1;
}

function findFirstDuplicate(toys) {
    const set = new Set();
    for (const toy of toys) {
        if (set.has(toy)) {
            return toy;
        } else {
            set.add(toy);
        }
    }
    return -1;
}

function findFirstDuplicate(gifts) {
    return gifts.find((val, ind) => gifts.indexOf(val) !==ind) ?? -1
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));
console.log(findFirstDuplicate([2, 1, 3, 5, 3, 2]));