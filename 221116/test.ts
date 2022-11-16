const sortArrayTS = (array:any):any => {
  let step = 0
  const changeValue = (n:number) => {
    let first = array[n]
    let next = array[n+1]
    
    array[n+1] = first
    array[n] = next
    return array
  }
  let hi = []
  for(let j = 0 ; j < array.length ; j ++){
    for(let i = 0 ; i < array.length ; i ++){
      if(array[i] > array[i+1]){
        step ++
        hi = changeValue(i)
      }
    }
  }
  let returnObj = {
    'one': hi[0],
    'two': hi[1],
    'three': hi[2],
    'four': hi[3],
    'five': hi[4],
    'six': hi[5],
    'seven': hi[6],
    'eight': hi[7],
    'nine': hi[8],
    'ten': hi[9]
  }
  console.log(step)
  return returnObj
}


let inputDataTS:any = []
for(let i = 0 ; i < 10 ; i ++){
  inputDataTS[i] = Math.floor(Math.random()*(10-0)+0);
}
console.log(sortArrayTS(inputDataTS))