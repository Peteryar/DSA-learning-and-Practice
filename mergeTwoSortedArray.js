//write a function that takes two sorted array and merge the two arrays and return a single sorted array

//Pseudo

//declare a variable call newArr, initialize with arr1[0] and arr2[0] in sorted order, which is the merged sorted array we will return

//declare a variable call longArrLength which is the length of the longest array

//create a loop that starts from zero  and ends at the longArrLength -1

//get items in each of the array at that loop index and save them in a variable call tempArr

// ensure tempArr items are sorted

//create two variables call undefinedIndex and secondIndexEmpty

// set undefinedIndex to tempArr.length - 1 and secondIndexEmpty to false

// check if tempArr[1] is undefined and set secondIndexEmpty to true if it is;


// compare tempArr[0] and the last two elements in newArr, swap if tempArr[0] is lesser

// push tempArr[0] and tempArr[1] if secondIndexEmpty is false

// else push tempArr[0] only

// return newArr


function mergeTwoSortedArrays(arr1, arr2){

    let longArrLength = arr1.length>arr2.length? arr1.length: arr2.length;
    
    let newArr = [];

    for(let i  = 0; i< longArrLength; i++ ){
         
    let tempArr = [arr1[i], arr2[i]];

    if(tempArr[0] > tempArr[1] || tempArr[0] == undefined){
         [tempArr[0], tempArr[1]] = [tempArr[1], tempArr[0]]
    }

    // console.log('tempArr', tempArr)
    
    let secondIndexEmpty = false;

    if(tempArr[1] == undefined){
              secondIndexEmpty = true
         }

    if(tempArr[0] < newArr[newArr.length-2]){
         [tempArr[0], newArr[newArr.length-2]] = [newArr[newArr.length-2], tempArr[0]]
    }

    if(tempArr[0] < newArr[newArr.length-1]){
          [tempArr[0], newArr[newArr.length-1]] = [newArr[newArr.length-1], tempArr[0]]
    }

     if(secondIndexEmpty){
          newArr.push(tempArr[0])
     }else{
          newArr.push(tempArr[0])
          newArr.push(tempArr[1])
     }

         console.log('newArr', newArr)
    }

    return newArr
}

// note: there is a bug in this solution, will try fix it later

mergeTwoSortedArrays([2, 4, 8, 20, 25], [3, 6, 7, 12, 13, 18, 21, 24, 27])