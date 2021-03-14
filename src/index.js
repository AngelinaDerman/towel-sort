
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix){
    const resultMatrixArr = matrix.map((item,index)=>{
      if((index+1)%2 === 0){
      return item.reverse()
      } else {
        return item
      }})
      return resultMatrixArr.flat()
  } else {
    return []
  }
  
}
