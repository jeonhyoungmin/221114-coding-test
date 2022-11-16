const sortArray = (array) => {
  let step = 0

  // shift와 pop은 어떻게 만들어지는가
  // shift
  // 첫 번째 값을 변수에 저장한다.
  // 두 번째 값 부터 배열의 lenght 값의 마지막까지 기존의 배열에 첫 번째부터 넣는다
  // 마지막 데이터를 바뀐 기존의 배열의 마지막 데이터에 넣는다

  // shift
  // let first = array[0]
  // console.log(first)
  // for(let i = 0; i < array.length-1 ; i++){
  //   array[i] = array[i+1]
  // }
  // array[array.length-1] = first
  // console.log(array)


  // pop
  // length의 길이를 -1 줄인다.

  // const shiftPush = () => {
  //   let first = array[0]
  //   console.log(first)
  //   for (let i = 0; i < array.length - 1; i++) {
  //     array[i] = array[i + 1]
  //   }
  //   array[array.length - 1] = first
  //   return array
  // }
  // console.log(shiftPush())

  // i 번째의 값이 맨 뒤로 가게 만들기
  // i 번째 값을 변수에 할당
  // i 번째 값에서 continue 설정
  // const nValueFuc = (n) => {
  //   let nValue = array[n]
  //   for(let i = 0 ; i < array.length ; i++){
  //     if(i === n){
  //       array[i] = null
  //     } else if(i !== n){
  //       array[i] = array[i]
  //     }
  //   }
  //   console.log(array)
  // }
  // nValueFuc(2)

  const changeValue = (n) => {
    let first = array[n]
    let next = array[n+1]
    
    array[n+1] = first
    array[n] = next
    // console.log(array)
    return array
  }
  // let second = array[1]
  // let third = array[2]

  // array[2] = second
  // array[1] = third

  // console.log(changeValue(0))
  // console.log(array)

  // console.log(step)
  let hi = []
  for(let j = 0 ; j < array.length ; j ++){
    for(let i = 0 ; i < array.length ; i ++){
      if(array[i] > array[i+1]){
        step ++
        // console.log(changeValue(i))
        hi = changeValue(i)
      }
    }
  }
  // console.log(step)
  // console.log(hi)

  // let keyArray = [
  //   'one', 'two', 'three','four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
  // ]

  // let returnObj = {
  //   'one': '',
  //   'two': '',
  //   'three': '',
  //   'four': '',
  //   'five': '',
  //   'six': '',
  //   'seven': '',
  //   'eight': '',
  //   'nine': '',
  //   'ten': ''
  // }

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
  
  // let returnObj = {}

  // for(let key in returnObj){
  //   for (let i = 0; i < hi.length; i++) {
  //     console.log(key)
  //       returnObj.key = hi[i]
  //       console.log(returnObj)
  //   }
  // }
  // oneValue = keyArray[0] = hi[0]
  // returnObj[0].keyArray[0] = hi[0]
  // console.log(returnObj)

  console.log(step)
  return returnObj
}


let inputData = []
for(let i = 0 ; i < 10 ; i ++){
  inputData[i] = Math.floor(Math.random()*(10-0)+0);
}
// console.log(sortArray(inputData))
console.log(sortArray(inputData))