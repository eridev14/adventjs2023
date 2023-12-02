function findFirstDuplicate(gifts) {
    return gifts.find((val, ind) => gifts.indexOf(val) !==ind) ?? -1
}
console.log(findFirstDuplicate([2, 1, 3, 5, 3, 2]));