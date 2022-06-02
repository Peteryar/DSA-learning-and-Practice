// write a function that takes in a string and returns the longest sequence of unique characters

function longestUniqueCharacters(str){
    let freqCounter = {};
    
    str = str.toLowerCase();

    let p1 = 0;
    let p2 = 0;

    let lookUp;
    let temp;
    let long = ""

    while(p2 < str.length){
       lookUp = freqCounter[str[p2]];

       if(lookUp){
         if(lookUp > p1){
             p1 = str[lookUp] == str[p2]?p2:lookUp
         }
         freqCounter[str[p2]] = p2+1;
         p2++
         temp = str.slice(p1, p2);
       }else{
        freqCounter[str[p2]] = p2+1;
        p2++;
        temp = str.slice(p1, p2);
       }
       long = long.length > temp.length?long:temp
    }

    return long
}

console.log(longestUniqueCharacters('school'));