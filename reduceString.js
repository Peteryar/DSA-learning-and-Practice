//write a function that takes in a string of  characters abc, and reduced the string to the lowest posible term of the 
//the following condition: oncurrence of two unique characters change to the the third character. two repetitive occurence
//does not change. the function should return the last inreducable state of the string length.

//example 
// input 1: abcabc
// output 2

// this is becus ab chage to c which makes the string to be ccabc, cc can't change, ca change to b, which reduced the 
// string to be cbbc, cb change to a which reduced string to be abc, which change to cc and return 2

// input2: cccc
// output: 4

function reduceString(str){
    let tempStr = str;
    let p1 = 0;
    let p2 = 1;

    let i = 0;

    let counter = {a:0, b:0, c:0}
    let exemptChar = '';

    const getReducedChar = (counter)=>{
       for(let x in counter){
           if(counter[x] == 0){
               return x
           }
       }
    }

    while(p2<tempStr.length){
        console.log('i------------->', i)
        console.log('str', tempStr)
        console.log('p1, p2', p1, p2)
       if(tempStr[p1] == tempStr[p2]){

           exemptChar = exemptChar+str[p1];

          p1+=1;
          p2+=1;

          tempStr = exemptChar + tempStr.substr(p1)

       }else{
           console.log('i ran---->')
           counter[tempStr[p1]]+=1;
           counter[tempStr[p2]]+=1;

           let reducedChar = getReducedChar(counter);
//         console.log('reducedChar', reducedChar);

           tempStr = exemptChar + reducedChar + tempStr.substr(p2+1);
           exemptChar = ''
           p1 = 0;
           p2 = 1
           counter = {a:0, b:0, c:0}
       }
       console.log('str', tempStr)
       console.log('exemptChar', exemptChar)
//        console.log('counter', counter)
       i++
    }
    return tempStr
}

reduceString('cccabc')