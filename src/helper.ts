export function closest(inputs:number[], ref: number, diff:number): number {
    if(inputs.length === 0) {
        return 0;
    }

    let closestIndex: number = 0;
    
    for(let i = 0; i < inputs.length; i++) {
        const t:number = inputs[i];
        let abs:number = Math.abs(t);

        if(abs < diff) {
            closestIndex = i;
            diff = abs;
        } else if(abs === diff && t > ref && inputs[closestIndex] < ref) {
            closestIndex = i;
        }
    }

    return inputs[closestIndex];
}

export function stringToASCIIAverageValue(text: string):number {
    return Math.floor(text.split('').reduce( (prev, char, index) => {
        return prev + text.charCodeAt(index) 
    } , 0) /text.length);
}

export function sentenceChangeKeyword(sentence: string, keyword: string) {
    // we split the words
    const s = sentence.split(' ');
    let l = '';
    // for this word
    for(let i = 0; i < s.length; i++) {
        if(i > 0) {
            l += ' ';
        }
        // we check if he is include in keyword
        if(keyword.toLowerCase().includes(s[i].toLowerCase())) {
            // if yes, we replace the keyword lowercase to uppercase
            l += s[i].toLowerCase().replace(keyword.toLowerCase(), keyword.toUpperCase());
        } else {
            l += s[i];
        }
    }
    return l;
}

export function stringToNumberTotalCount(text: string): number {
    let numberTotalCount = 0;
    for(let i =0; i < text.length; i++) {
        const value = parseInt(text[i]); 
        if(typeof value === 'number' &&  !isNaN(value)) {
            numberTotalCount++;
        }
    }
    return numberTotalCount;
}

export function raceHorse(inputs: string[]) {
    const horses:number[] = inputs.map((input) => +input).sort((a,b) => a - b);
    const differences = horses
        .map((value, index, array) => Math.abs(value - array[index-1]))
        .slice(1);

    return differences.sort((a,b) => a - b)[0];
}