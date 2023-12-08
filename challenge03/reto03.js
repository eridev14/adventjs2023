function findNaughtyStep(original, modified) {
    if (original === modified) return '';
    let pos = 0;
    for (let i = 0; (i < original.length || i < modified.length); i++) {
        if (original[i] !== modified[i]) {
            pos = i;
            break;
        }
    }
    let or = original.slice(pos)
    let mo = modified.slice(pos)

    return (or.length > mo.length) ? or[0] : mo[0];
}

function findNaughtyStep(original, modified) {
    if (original === modified) {
        return '';
    }

    let minLength = Math.min(original.length, modified.length);
    let pos = 0;

    while (pos < minLength && original[pos] === modified[pos]) {
        pos++;
    }

    return original.slice(pos, pos + 1) || modified.slice(pos, pos + 1);
}

function findNaughtyStep(original, modified) {
    if (original === modified) {
        return '';
    }

    let pos = 0;
    while (original[pos] === modified[pos]) {
        pos++;
    }

    let or = original.slice(pos)
    let mo = modified.slice(pos)

    return (or.length > mo.length) ? or[0] : mo[0];
}

const original = 'xxxx'
const modified = 'xxoxx'

console.log(findNaughtyStep(original, modified));