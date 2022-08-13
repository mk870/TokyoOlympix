export const reverseList = data=>{
  let newArr = [...data]
  if(newArr.length){
    return newArr.reverse()
  }else{
    return newArr
  }
}