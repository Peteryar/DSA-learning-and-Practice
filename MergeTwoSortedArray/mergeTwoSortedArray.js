function mergeSortedArray (arr1, arr2){
     
     let newArr = [];

     let i = 0;
     let j = 0;
     
     while(arr1[i] || arr2[j]){
          console.log(i, j)
          console.log('arr1', arr1[i])
          console.log('arr2', arr2[j])
          
          if(!arr1[i]){   
             newArr.push(arr2[j])
               j++
          }
          else if(!arr2[j]){
               newArr.push(arr1[i])
               i++
          }else if(arr1[i] < arr2[j]){
               newArr.push(arr1[i])
               i++
          }else{
               newArr.push(arr2[j])
               j++
          }
          console.log('newArr', newArr)
      }
   
    return newArr
}

mergeSortedArray([5, 12, 15, 17, 19, 20, 21], [2])