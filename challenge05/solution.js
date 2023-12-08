function cyberReindeer(road, time) {
    const result = [road];
    let last = '.'
    for (let i = 1, pos = 1; i < time; i++) {
        last = last + road[i];
        if (i === 5) {
            road = road.replaceAll('|', '*')
            last = last.replaceAll('|', '*')
            pos = pos + 1;
        }

        road = last.slice(0, pos) + 'S' + road.slice(pos + 1);
        if (road[pos + 1] !== '|') pos++;

        result.push(road)
    }

    return result;
}


function cyberReindeer(road, time) {
    const result = [];
    let sPos = 0;
    let current = road;
    const BARRIER = 4;
    for (let i = 0; i < time; i++) {
        result.push(current)
        road = i === BARRIER ? road.replaceAll('|', '*') : road;
        sPos += +(road[sPos + 1] !== '|');
        current = `.${road.slice(1, sPos)}S${road.slice(sPos + 1)}`
    }
    return result;
}




const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result);