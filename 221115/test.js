// 구매비용
// 각 화폐 단위의 소진 상태를 확인

const change_money = (purchase, pay, remainMoney) => {
  // 거스름 돈 계산
  let exchange = pay - purchase
  console.log(exchange)

  // 거스름돈이 5만원 이상인 경우
  // 거스름돈에서 5만원이 몇 개인지 확인
  // 거스름돈 - 50000 >= 0보다 클 때까지 count
  // => 모든 화폐 단위에 적용되도록 변경
  const exchangeCalc = (exchange, unit) => {
    let moneyCount = 0
      while(exchange - unit >= 0){
        exchange = exchange - unit
        moneyCount ++
      }
    return moneyCount
  }

  // 각 계산기를 화폐 소진 여부로 확인하여 출력
  // 거스름돈이 해당 화폐 단위보다 클 경우 계산 시작
  // 거스름돈에서 빼기
  let value = {}
  if(remainMoney.fiftyThousand && exchange >= 50000){
    value[50000] = exchangeCalc(exchange,50000) + '개'
    exchange = exchange - (exchangeCalc(exchange, 50000)*50000)
  }
  if(remainMoney.tenThousand && exchange >= 10000){
    value[10000] = exchangeCalc(exchange, 10000) + '개'
    exchange = exchange - (exchangeCalc(exchange, 10000)*10000)
  }
  if(remainMoney.fiveThousand && exchange >= 5000){
    value[5000] = exchangeCalc(exchange, 5000) + '개'
    exchange = exchange - (exchangeCalc(exchange, 5000)*5000)
  }
  if(remainMoney.oneThousand && exchange >= 1000){
    value[1000] = exchangeCalc(exchange, 1000) + '개'
    exchange = exchange - (exchangeCalc(exchange, 1000)*1000)
  }
  if(remainMoney.fiveHundred && exchange >= 500){
    value[500] = exchangeCalc(exchange, 500) + '개'
    exchange = exchange - (exchangeCalc(exchange, 500)*500)
  }
  if(remainMoney.oneHundred && exchange >= 100){
    value[100] = exchangeCalc(exchange, 100) + '개'
    exchange = exchange - (exchangeCalc(exchange, 100)*100)
  }
  if(remainMoney.fifty && exchange >= 50){
    value[50] = exchangeCalc(exchange, 50) + '개'
    exchange = exchange - (exchangeCalc(exchange, 50)*50)
  }
  if(remainMoney.ten && exchange >= 10){
    value[10] = exchangeCalc(exchange, 10) + '개'
    exchange = exchange - (exchangeCalc(exchange, 10)*10)
  }
  console.log(value)
}

const remainMoney = {
  fiftyThousand: true,
  tenThousand: true,
  fiveThousand: false,
  oneThousand: false,
  fiveHundred: true,
  oneHundred: true,
  fifty: true,
  ten: true
}

change_money(34830, 100000, remainMoney)