function manufacture(gifts, materials) {
    const values = gifts.filter(val => {
        for (const c of val) {
            if (!materials.includes(c)) {
                return false;
            }
        }
        return true;
    })
    return values
}




function manufacture(gifts, materials) {
    const values = []
    forgif: for (const val of gifts) {
        for (const c of val) {
            if (!materials.includes(c)) {
                continue forgif;
            }
        }
        values.push(val)
    }
    console.log(values);
    return values
}

function manufacture(gifts, materials) {
    const values = gifts.filter(val => {
        if (val.split('').every((l) => materials.includes(l))) {
            return true
        }
    })
    return values
}

function manufacture(gifts, materials) {
    const values = gifts.filter(val => {
        if (val.split('').every((l) => materials.includes(l))) {
            return true
        }
    })
    return values
}

function manufacture(gifts, materials) {
    return gifts.filter(val => val.split('').every(l => materials.includes(l)));
}

function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
    return gifts.filter(val => [...val].every(l => materialSet.has(l)));
}

function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
    return gifts.filter(val => {
        for (const char of val) {
            if (!materialSet.has(char)) {
                return false;
            }
        }
        return true;
    });
}


function manufacture(gifts, materials) {
    const materialRegex = new RegExp(`^[${materials}]+$`);
    return gifts.filter(val => materialRegex.test(val));
};

function manufacture(gifts, materials) {
    const regex = new RegExp(`^[${materials}]+`.concat("$"));
    return gifts.filter((gift) => {
        return regex.test(gift);
    });
}

function manufacture(gifts, materials) {
    const regex = new RegExp(`^[${materials}]+`.concat("$"));
    return gifts.filter(val => regex.test(val));
}


function manufacture(gifts, materials) {
    const regex = new RegExp(`^[${materials}]+$`);
    return gifts.filter(val => regex.test(val));
}

function manufacture(gifts, materials) {
    return gifts.filter(gift => {
        const giftChars = new Set(gift);
        return [...giftChars].every(char => materials.includes(char));
    });
}


function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
    return gifts.filter(gift => [...gift].every(char => materialSet.has(char)));
}





const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'
console.log(manufacture(gifts, materials));