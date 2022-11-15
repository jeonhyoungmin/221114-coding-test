def change_money(purchase, pay, remainMoney):
    exchange = pay - purchase

    def exchangeCalc(exchange, unit):
        moneyCount = 0
        while exchange-unit >=0:
            exchange = exchange - unit
            moneyCount = moneyCount + 1
        return moneyCount

    value = {}
    for i in range(len(remainMoney)):
        if(remainMoney[i]['unit'] and exchange >=remainMoney[i]['value']):
            value[remainMoney[i]['value']] = str(exchangeCalc(exchange, remainMoney[i]['value'])) + '개'
            exchange = exchange - exchangeCalc(exchange, remainMoney[i]['value'])*remainMoney[i]['value']

    return value



remainMoney = [
  {'unit': bool(True), 'value': 50000},
  {'unit': bool(True), 'value': 10000},
  {'unit': bool(False),'value': 5000},
  {'unit': bool(False),'value': 1000},
  {'unit': bool(True), 'value': 500},
  {'unit': bool(True), 'value': 100},
  {'unit': bool(True), 'value': 50},
  {'unit': bool(True), 'value': 10}
]

print(change_money(34830, 100000, remainMoney))