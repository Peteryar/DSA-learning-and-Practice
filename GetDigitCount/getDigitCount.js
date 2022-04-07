function getDigitCount(numb){
    let counter = 1;
    let tempVal = numb;

    while(tempVal/10 >= 1){
        counter++
        tempVal = tempVal/10
    }
    return counter
}

console.log(getDigitCount(500019))