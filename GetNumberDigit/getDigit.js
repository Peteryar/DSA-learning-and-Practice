function getDigit(number, pos){
    let base = 10 * 10**pos;
    let remainder = number%base;

    if(number < 0){
        remainder = -1*remainder;
    }
    let digit = Math.floor(remainder/10**pos);

    return digit;
}

console.log(getDigit(-301, 2))