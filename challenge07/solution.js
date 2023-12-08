function drawGift(size, symbol) {
    if (size === 1) return '#\n';
    let cube = ''
    const sizeT = (size * 2) - 1;
    const mid = Math.floor(sizeT / 2)
    const sizePat = size - 2;
    let sizeVoid = size - 1;
    let x = 0;
    let pat = '#' + symbol.repeat(sizePat) + '#';
    cube = ' '.repeat(sizeVoid) + '#'.repeat(size) + '\n';
    sizeVoid--;

    for (let i = 1; i < sizeT - 1; i++) {

        if (i === mid) {
            cube += '#'.repeat(size - 1) + pat + '\n'
            x = mid - 2;
            continue;
        }

        cube += ' '.repeat(sizeVoid) + pat + symbol.repeat(x) + '#' + '\n';

        (i < mid) ? x++ : x--;

        sizeVoid -= +(i < mid);
    }

    cube += '#'.repeat(size) + '\n';
    return cube;
}




console.log(drawGift(9, '+'));




