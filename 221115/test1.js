// 구매비용
// 각 화폐 단위의 소진 상태를 확인

const change_money = (purchase, pay, remainMoney) => {
  // 거스름 돈 계산
  let exchange = pay - purchase
  // console.log(exchange)

  // 거스름돈이 5만원 이상인 경우
  // 거스름돈에서 5만원이 몇 개인지 확인
  // 거스름돈 - 50000 >= 0보다 클 때까지 count
  // => 모든 화폐 단위에 적용되도록 변경
  // 계산기
  const exchangeCalc = (exchange, unit) => {
    let moneyCount = 0
      while(exchange - unit >= 0){
        exchange = exchange - unit
        moneyCount ++
      }
    return moneyCount
  }

  // 각 화폐 단위 적용하여 계산 후 value 객체에 값 넣기
  let value = {}
  for(let i = 0 ; i < remainMoney.length ; i ++){
    if(remainMoney[i].unit && exchange >= remainMoney[i].value){
      value[remainMoney[i].value] = exchangeCalc(exchange, remainMoney[i].value) + '개'
      // console.log(value)
      // console.log(exchangeCalc(exchange, remainMoney[i].value))
      exchange = exchange - exchangeCalc(exchange, remainMoney[i].value)*remainMoney[i].value
      // console.log(exchange)
    }
  }

  return value

}

const remainMoney = [
  {unit: true, value: 50000},
  {unit: true, value: 10000},
  {unit: false, value: 5000},
  {unit: false, value: 1000},
  {unit: true, value: 500},
  {unit: true, value: 100},
  {unit: true, value: 50},
  {unit: true, value: 10}
]

console.log(change_money(34830, 100000, remainMoney))