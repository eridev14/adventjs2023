
function decode(message) {
    do {
        let fir = message.lastIndexOf('(')
        let las = message.indexOf(')', fir)
        const newm = message.slice(fir + 1, las).split('').reverse().join('')

        message = message.slice(0, fir) + newm + message.slice(las + 1)
    } while (message.indexOf(')') != -1);

    return message
}



function decode(message) {

    while (message.indexOf('(') !== -1) {
        let fir = message.lastIndexOf('(');
        let las = message.indexOf(')', fir);
        let newm = message.slice(fir + 1, las).split('');
        for (let i = 0; i < Math.floor(newm.length / 2); i++) {
            let aux = newm[i];
            newm[i] = newm[newm.length - 1 - i];
            newm[newm.length - 1 - i] = aux;
        }
        message = (message.slice(0, fir) + newm.join('') + message.slice(las + 1));
    }
    return message;

}


const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus