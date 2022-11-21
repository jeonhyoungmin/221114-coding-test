const text_listup = (data) => {

  
  const languageCategory = (data) => {
    let spChar = /[^?/]$/
    let special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/
    let eng = /[a-zA-Z]/
    let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

    if (eng.test(data) 
    && special.test(data) 
    && kor.test(data) === false ){
    let charArray = data/* .toString() */.toLowerCase().replace(/[^a-zA-z]/g, "")
      console.log('됨')
      let numberOfChar = {}
      for (let i = 0; i < charArray.length; i++) {
        if (numberOfChar[charArray[i]] >= 1) {
          numberOfChar[charArray[i]] += 1
        } else {
          numberOfChar[charArray[i]] = 1
        }
      }
      return numberOfChar
    } else {
      console.log('아님')
    }
  }

  let ObjChar = languageCategory(data)
  let highCharNum = 0
  let highChar = ''
  let lowCharNum = data.length
  let lowChar = ''
  for (let key in ObjChar) {
    if (ObjChar[key] >= highCharNum) {
      highCharNum = ObjChar[key]
      highChar = key
    }
  }
  for (let key in ObjChar) {
    if (ObjChar[key] <= lowCharNum) {
      lowCharNum = ObjChar[key]
      lowChar = key
    }
  }
  // console.log(lowChar + lowCharNum)
  // console.log(highChar + highCharNum)s

  let repeatCharCount = highCharNum - lowCharNum
  // console.log(repeatCharCount)

  // 문자열에서 무작위로 하나의 음절을 선택하고 그 음절을 그 음절 플러스 적게 쓰인 문자로 바꾸기
  // for(let i = 0 ; i < repeatCharCount ; i ++){
  // let location = Math.floor(Math.random()*2)
  // if(location = 0){
  //   data[randomLocation] = data[randomLocation] + lowChar
  // } else {
  //   data[randomLocation] = lowChar + data[randomLocation]
  // }
  // data.splice(randomLocation, 0, lowChar)

  // console.log(data)
  // }
  // toString(data)
  // console.log(typeof (data))
  // let dataArray = []
  // let test = ''
  // for (let i = 0; i < repeatCharCount; i++) {
    //   if(i === 0){
      //     let test = data.replace(data[randomLocation], data[randomLocation] + lowChar)
      //   } else {
        //     let test = data.replace(data[randomLocation], data[randomLocation] + lowChar)
  //   }
  // }
  
  // console.log(test)
  // data.splice(1,0,'z')
  // console.log(dataArray)
  // for (let i = 0; i < dataArray.length; i++) {
    //   dataArray.splice(randomLocation, 0, lowChar)
    // }
    // console.log(dataArray.toString())
    let dataArry = [...data]
    for(let i = 0 ; i < repeatCharCount ; i ++){
    let randomLocation = Math.floor(Math.random() * dataArry.length)
    dataArry.splice(randomLocation, 0, lowChar)
    // console.log(data.length)
    // console.log(dataArry.length)
  }
  // console.log(dataArry.join(''))

  let five = ['']
  let count = 0
  dataArry = dataArry.join('').replace(/[^a-zA-z]/g, "")

  // console.log(dataArry)
  // console.log(Math.ceil(dataArry.length/5))
  // for(let i = 0 ; i < Math.ceil(dataArry.length/5) ; i ++){
  //   for(let j = i*5 ; j < (i*5)+5 ; i++){
  //     five[i] = five[i] + dataArry[j]
  //   }
  // }
  // five[0] = dataArry[0] + dataArry[1] + dataArry[2] + dataArry[3] + dataArry[4]
  // five[1] = dataArry[5] + dataArry[6] + dataArry[7] + dataArry[8] + dataArry[9]
  console.log(dataArry)
  // console.log(data.splice(1, 0 , 'w'))
  // console.log(dataArry)
  // let wow = lowChar
  // console.log(wow)

  for(let i = 0 ; i < dataArry.length ; i ++){
    if(five[count].length === 5){
      count ++
      five[count] = ''
      five[count] += dataArry[i]
    } else {
      five[count] += dataArry[i]
    }
  }

  console.log(five.join(' '))
}

const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

text_listup(fromInput)

















// const text_listup = (data) => {

  
//   const languageCategory = (data) => {
//     let spChar = /[^?/]$/
//     let special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/
//     let eng = /[a-zA-Z]/
//     let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

//     if (eng.test(data) 
//     && special.test(data) 
//     && kor.test(data) === false ){
//     let charArray = data.toLowerCase().replace(/[^a-zA-z]/g, "")
//       // console.log('됨')
//       let numberOfChar = {}
//       for (let i = 0; i < charArray.length; i++) {
//         if (numberOfChar[charArray[i]] >= 1) {
//           numberOfChar[charArray[i]] += 1
//         } else {
//           numberOfChar[charArray[i]] = 1
//         }
//       }
//       return numberOfChar
//     } else {
//       // console.log('아님')
//     }
//   }

//   let ObjChar = languageCategory(data)
//   let highCharNum = 0
//   let highChar = ''
//   let lowCharNum = data.length
//   let lowChar = ''
//   for (let key in ObjChar) {
//     if (ObjChar[key] >= highCharNum) {
//       highCharNum = ObjChar[key]
//       highChar = key
//     }
//   }
//   for (let key in ObjChar) {
//     if (ObjChar[key] <= lowCharNum) {
//       lowCharNum = ObjChar[key]
//       lowChar = key
//     }
//   }

//   let repeatCharCount = highCharNum - lowCharNum
//     let dataArry = [...data]
//     for(let i = 0 ; i < repeatCharCount ; i ++){
//     let randomLocation = Math.floor(Math.random() * dataArry.length)
//     dataArry.splice(randomLocation, 0, lowChar)
//   }

//   let five = ['']
//   let count = 0
//   dataArry = dataArry.join('').replace(/[^a-zA-z]/g, "")

//   for(let i = 0 ; i < dataArry.length ; i ++){
//     if(five[count].length === 5){
//       count ++
//       five[count] = ''
//       five[count] += dataArry[i]
//     } else {
//       five[count] += dataArry[i]
//     }
//   }

//   console.log(five.join(' '))

//   return ObjChar
// }


// const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

// console.log(text_listup(fromInput))
