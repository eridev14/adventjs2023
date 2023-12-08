function maxDistance(movements) {
    movements = movements.replaceAll('*', '>');
    console.log(movements);
    const left = movements.match(/>/g).join('').length;
    const rigth = movements.match(/</g).join('').length;
    console.log(left);
    const maxM = Math.abs(left - rigth)
    return maxM;
}

function maxDistance(movements) {
    const leftMatches = movements.match(/>/g)?.length ?? 0;
    const rightMatches = movements.match(/</g)?.length ?? 0;
    let distance = leftMatches - rightMatches;
    let extra = movements.length - (rigth + left);
    return Math.abs(distance) + Math.abs(extra);
}

function maxDistance(movements) {
    let regP = movements.replace(/[^*]/g, '');

    let count = 0;
    for (const c of movements) {
        if (c === ">") count++;
        if (c === "<") count--;
    }
    return Math.abs(count) + regP.length;
}




// function maxDistance(movements) {
//     let regP = movements.replace(/[^*]/g, '');
//     let regL = movements.replace(/[^>]/g, '');
//     let regR = movements.replace(/[^<]/g, '');
//     return Math.abs(regL.length - regR.length) + regP.length;
// }




const movements = '>>**<'
const result = maxDistance(movements)
console.log(result) // -> 2