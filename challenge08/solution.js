function organizeGifts(gifts) {
    const num = gifts.match(/\d+/g)
    const gift = gifts.match(/\D+/g)

    let newGif = '';

    num.forEach((n, i) => {
        const box = Math.floor(n / 10);
        const boxR = n % 10;
        const pale = Math.floor(box / 5);
        const paleR = box % 5;

        console.log(box);
        console.log(boxR);
        console.log(pale);
        console.log(paleR);

        const mm = `[${gift[i]}]`.repeat(pale)
        const mm2 = `{${gift[i]}}`.repeat(paleR);
        const mmm = `(${gift[i].repeat(boxR)})`
        newGif += mm + mm2 + mmm;
        newGif = newGif.replace(/\(\)/g, '');
    });

    return newGif;
}

function organizeGifts(gifts) {
    const num = gifts.match(/\d+/g);
    const gift = gifts.match(/\D+/g)
    let newGif = ""
    num.forEach((n, i) => {
        let l = gift[i];
        const box = +(n / 10)
        const boxR = (n % 10)
        const pale = +(box / 5)
        const paleR = (box % 5)
        const mmm = `(${l.repeat(boxR)})`
        newGif += `[${l}]`.repeat(pale) + `{${l}}`.repeat(paleR) + mmm
    });

    return newGif.replace(/\(\)/g, '')
}






// function organizeGifts(gifts) {
//     const num = gifts.match(/(\d+)(\D)/g)
//     console.log(num);
//     let newGif = '';

//     for (let i = 0; i < num.length; i++) {
//         const n = parseInt(num[i]);
//         const l = num[i].slice(-1);
//         const box = Math.floor(n / 10);
//         const boxR = n % 10;
//         const pale = Math.floor(box / 5);
//         const paleR = box % 5;
//         const mm = `[${l}]`.repeat(pale) + `{${l}}`.repeat(paleR);
//         newGif += mm + `(${l.repeat(boxR)})`;
//     }

//     return newGif.replace(/\(\)/g, '');
// }

function organizeGifts(gifts) {
    const matches = gifts.match(/(\d+)(\D)/g);
    let newGif = "";
    for (let i = 0; i < matches.length; i++) {
        const n = parseInt(matches[i]);
        console.log(n);
        const l = matches[i].slice(-1);
        let box = +(n / 10);
        let boxR = n % 10;
        let pale = +(box / 5);
        let paleR = box % 5;
        const paleBoxes = `[${l}]`.repeat(pale);
        const remainingPale = `{${l}}`.repeat(paleR);
        const remainingBoxes = `(${l.repeat(boxR)})`;
        newGif += paleBoxes + remainingPale + remainingBoxes;
    }

    return newGif.replace(/\(\)/g, '');
}


console.log(organizeGifts("20a"));



