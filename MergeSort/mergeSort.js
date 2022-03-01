function mergeSort(arr){

    function mergeSortedArray (arr1, arr2){
       let mergedArr = [];
   
       let i = 0;
       let j = 0;
  
       console.log('arr1', arr1[i])
       console.log('arr2', arr2[j])
  
       
    //    while(arr1[i] || arr2[j]){
    //         console.log('i', arr[i])
    //         console.log('j', arr[j])
    //         if(arr1[i] < arr2[j]){
    //             mergedArr.push(arr[i])
    //             i++
    //         }else{
    //             mergedArr.push(arr2[j])
    //             j++
    //         }
    //    }
      
      return mergedArr
    } 
  
      let newArr = [];
      
     for(let i=0; i < arr.length; i++){
        newArr.push([arr[i]])     
     }
  
    return (function(mArr){
      // for(let i=0; i<arr.length; i++){
      //   console.log(arr[i])
        
      // }
  
      const merged = mergeSortedArray(mArr[0], mArr[1])
  
      console.log(merged)
     
    })(newArr)
      
  }
  mergeSort([5, 4, 3, 6])