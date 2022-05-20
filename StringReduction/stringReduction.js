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

function reduceString(str){
  
    let p1 = 0;
    let p2 = 1;


    const getReducedChar = (st)=>{
        
       let counter = {a:0, b:0, c:0};
        
        for(let x of st){
           counter[x]+=1
        } 
       for(let x in counter){
           if(counter[x] == 0){
               return x
           }
       }
    }
    console.log('str', str, str.length)

    while(str[p2]){
        let char;
        if(str[p1] !== str[p2]){
            char = str[p1]+str[p2];
            let reducedChar = getReducedChar(char);

            str = str.substr(0, p1)+ reducedChar + str.substr(p2+1);
            p1=0;
            p2=1;
        }else{
            p1+=1;
            p2+=1
        }
        console.log('char', char)
        console.log('str', str, str.length);
    }

    return str.length;
  
}


console.log(stringReduction('abc'))
