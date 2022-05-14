function getReplaceChar (str){
    let counter = {a:0, b:0, c:0};
    for(let i=0; i<str.length; i++){
        counter[str[i]] += 1
    }
    for(let x in counter){
        if(counter[x] == 0){
            return x;
        }
    }
}

function stringReduction(s) {
  for(let i =0; i<s.length; i++){
     
  }
}

console.log(stringReduction('abc'))
