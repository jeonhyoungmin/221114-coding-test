// 어떤 식으로 만들 것인지?
// 길이 값이 10인 배열 5개
// 랜덤으로 하기
// 랜덤 숫자 돌리는 함수
// 버튼 클릭 시, 함수 발동
// 화면에 보이기

// 버튼 누르면 랜덤 숫자 5개가 뽑히고
// 각 배열에 하나씩 들어가서 숫자 변환
// 동일한 줄이 생기면 색깔이 들어온 뒤 해당 줄 삭제


const bingo = () => {
  const lineOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const lineTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const lineThr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const lineFou = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const linefiv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // 함수가 실행되면
  // 자동으로 랜덤 번호를 뽑는 함수 실행
  // 대입
  // 득점, 삭제
  
  // 각 배열마다 랜덤 숫자 실행
  // 리터럴 길이 값 10개 일 경우
  // 동일한 숫자가 있을시 재 실행
  // 매개변수에는 길이 값
  const randomFunc = (arrayLenght) => {
    let randomNumber = Math.floor(Math.random()*arrayLenght)
    return randomNumber
    // console.log(randomNumber)
  }

  
  // 각 배열에 랜덤 숫자가 들어가서 값이 변하도록 만들기
  // console.log(lineOne[randomFunc(10)])
  // 어떻게 숫자를 유지시킬까?
  // 5개의 배열 준비
  // 배열 유지와 연관성 확보 필요
  // 전역 변수는 안됨.
  // lineOne[randomFunc(10)] = 1
  // lineTwo[randomFunc(10)] = 1
  // lineThr[randomFunc(10)] = 1
  // lineFou[randomFunc(10)] = 1
  // linefiv[randomFunc(10)] = 1
  // console.log(lineOne)
  // console.log(lineTwo)
  // console.log(lineThr)
  // console.log(lineFou)
  // console.log(linefiv)
  const testFunc = (array) => {
    array.splice(randomFunc(array.length), 1, 1)
  }
  const spliceFunc = (array, index) => {
    array.splice(index, 1)
  }
  
  // 만약에 각 배열의 testFunc의 
  const bingoFunc = () => {

    const circleFunc = () => {
      testFunc(lineOne)
      testFunc(lineTwo)
      testFunc(lineThr)
      testFunc(lineFou)
      testFunc(linefiv)
    }

    let count = 0
    let bingo = 0

    let interval = setInterval(() => {
      if(lineOne[0] === 1 
        && lineTwo[0] === 1
        && lineThr[0] === 1
        && lineFou[0] === 1
        && linefiv [0] === 1
        && lineOne.length === 1){
        clearInterval(interval)
        count ++
        bingo ++
        console.log("승리 !!")
        console.log("총 " + count + "번 실행하여 " + bingo + "빙고 완성")
      } else {

        for(let i = 0 ; i < lineOne.length ; i ++){
          if(lineOne[i] === 1 
            && lineTwo[i] === 1
            && lineThr[i] === 1
            && lineFou[i] === 1
            && linefiv [i] === 1){
              spliceFunc(lineOne, i)
              spliceFunc(lineTwo, i)
              spliceFunc(lineThr, i)
              spliceFunc(lineFou, i)
              spliceFunc(linefiv, i)
              bingo ++
              console.log("빙고 " +bingo+ " !!")
            }
        }

        circleFunc()
        count ++
        console.log('현재 ' + count + '번 실행 중')
      }
      
      console.log(lineOne)
      console.log(lineTwo)
      console.log(lineThr)
      console.log(lineFou)
      console.log(linefiv)
    }, 500);



  }

  bingoFunc()

  
}


bingo()