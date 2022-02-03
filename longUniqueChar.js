// write a function that takes in a string and returns the longest sequence of unique characters

function longestUniqueCharacters(str){
    let freqCounter = {};
    
    let opStr = str.toLowerCase();

    let p1 = 0;
    let p2 = 1;

    freqCounter = {[opStr[p1]]:1, [opStr[p2]]:1};

    let longStr = opStr[p1] + opStr[p2];
    let tempStr = longStr;

    while(p2 < opStr.length){
       p2++

       let lookUp = freqCounter[opStr[p2]];

       if(!lookUp){
           freqCounter[opStr[p2]] = 1;
           tempStr+= opStr[p2]
           longStr = tempStr.length> longStr.length?tempStr:longStr;
       }else{
           tempStr = tempStr.slice(1) + str[p2];
           longStr = tempStr.length> longStr.length?tempStr:longStr;
       }
    }

    return longStr
}

//longestUniqueCharacters('blackberry');

function getLongestUniqueChar(str){
    let counter = {};
    let tempStr = '';
    let longStr = '';

    let p1=0;
    let p2 =0;

    while(p2<str.length){
         counter[str[p2]] = counter[str[p2]]+ 1 || 1;
        console.log(p1, p2)
        if(str[p2] == str[p2-1]){
            
            p2+=1;
            p1 = p2

            tempStr = str[p2]
            longStr = tempStr.length>longStr.length?tempStr:longStr;
            counter[str[p2]] = 1
        }else{

            if(counter[str[p2]] == 2){
                p1+=1;
                tempStr = tempStr 
                longStr = tempStr.length>longStr.length?tempStr:longStr;

                counter[str[p2]] = 1
            }else{
                 tempStr = str.substr(p1, p2);
                 longStr = tempStr.length>longStr.length?tempStr:longStr;
            }
        }
       
        console.log('longStr--->', longStr)
        p2++
    }
    return longStr
}

getLongestUniqueChar('bbbbblackberry')