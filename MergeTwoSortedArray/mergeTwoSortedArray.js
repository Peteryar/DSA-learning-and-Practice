function mergeTwoSortedArrays(arr1, arr2){
     let newArr = [];
     let i = 0;
     let j = 0;

     while(arr1[i]||arr2[j]){
          if(arr1[i] < arr2[j]){
               newArr.push(arr1[i])
               i++
          }else{
               newArr.push(arr2[j])
               j++
          }
     }
     return newArr
}

console.log(mergeTwoSortedArrays([2, 4, 8, 20, 25], [3, 6, 7, 12, 13, 18, 21, 24, 27]))