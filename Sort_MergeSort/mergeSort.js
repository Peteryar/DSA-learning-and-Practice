function mergeSort(arr){

    function mergeSortedArray (arr1, arr2){
       let mergedArr = [];
   
       let i = 0;
       let j = 0;
       
       while(arr1[i] || arr2[j]){
          if(!arr1[i]){
            mergedArr.push(arr2[j])
            j++
          }else if(!arr2[j]){
            mergedArr.push(arr1[i]);
            i++
          }
            else if(arr1[i] < arr2[j]){
                mergedArr.push(arr1[i])
                i++
            }else{
                mergedArr.push(arr2[j])
                j++
            }
       }
      
      return mergedArr
    } 
  
      let newArr = [];
      
     for(let i=0; i < arr.length; i++){
        newArr.push([arr[i]])     
     }
  
     return (function sort (sortedArr){
       
       if(sortedArr.length <= 1){
         return sortedArr[0]
       }

       newArr = []
    
      for(let i=0; i<sortedArr.length; i+=2){
        newArr.push(mergeSortedArray(sortedArr[i], sortedArr[i+1]?sortedArr[i+1]:[]))
      }
   
      return sort(newArr)
     
    })(newArr)
      
  }

const data = Array.apply(null, {length:100000}).map(a=>Math.floor(Math.random()*100000))
console.log('mergeSortData===>', data)
console.log('sorted', mergeSort(data))