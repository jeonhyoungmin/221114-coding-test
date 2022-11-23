def trump_deck(shapeArray):
  eachKey = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  jokeyKey = ["RED", "BLACK"]
  returnObj = {}
  count = 0

  def objMaker(objKey):
    Key = objKey
    Value = {}
    for i in range(len(Key)):
      Value[Key[i]] = i+1
    return Value

  for i in range(len(shapeArray)):
    returnObj[shapeArray[i]] = objMaker(eachKey);
    count = count + len(eachKey)
    if(shapeArray[i] == 'joker'):
      returnObj["joker"] = objMaker(jokeyKey);
      count = count - len(eachKey)
      count = count + len(jokeyKey)

  print(f'해당 리턴된 객체의 카드 개수에 대한 검사결과, 총 {count}개로 정상적인 구성입니다')
  print(returnObj)
  return returnObj

shape_array = ["spade", "heart", "diamond", "club", "joker"];
trump_deck(shape_array);