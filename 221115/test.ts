const change_moneyTS = (purchase:number, pay:number, remainMoneyTS:any[]) => {
  let exchange = pay - purchase

  const exchangeCalc = (exchange:number, unit:number) => {
    let moneyCount = 0
      while(exchange - unit >= 0){
        exchange = exchange - unit
        moneyCount ++
      }
    return moneyCount
  }

  let value:any = {}
  for(let i = 0 ; i < remainMoneyTS.length ; i++){
    if(remainMoneyTS[i].unit && exchange >= remainMoneyTS[i].value){
      value[remainMoneyTS[i].value] = exchangeCalc(exchange, remainMoneyTS[i].value) + '개'
      exchange = exchange - exchangeCalc(exchange, remainMoneyTS[i].value)*remainMoneyTS[i].value
    }
  }

  return value

}

const remainMoneyTS = [
  {unit: true, value: 50000},
  {unit: true, value: 10000},
  {unit: false, value: 5000},
  {unit: false, value: 1000},
  {unit: true, value: 500},
  {unit: true, value: 100},
  {unit: true, value: 50},
  {unit: true, value: 10}
]

console.log(change_moneyTS(34830, 100000, remainMoneyTS))