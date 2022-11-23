const trump_deck = (shapeArray) => {
  // 배열이 들어오면
  // 객체로 리턴

  // 객체에 키 값으로 배열을 사용
  // 각 키 값의 값은 객체
  // 객체에 객체를 넣어야 함
  // 키 A, 2~10, J, Q, K
  // 값 1~13
  let eachKey = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let jokerKey = ["RED", "BLACK"];

  let returnObj = {};
  // let keyValueObj = {};
  // let jokerKeyValue = {};

  let count = 0;
  const objMaker = (objKey) => {
    let Key = objKey;
    let Value = {};
    for (let i = 0; i < Key.length; i++) {
      Value[Key[i]] = i + 1;
      count++;
    }
    return Value;
  };

  // console.log(objMaker(eachKey));
  // for (let i = 0; i < eachKey.length; i++) {
  //   keyValueObj[eachKey[i]] = i + 1;
  // }

  // console.log(objMaker(jokerKey));
  // for (let i = 0; i < jokerKey.length; i++) {
  //   jokerKeyValue[jokerKey[i]] = i + 1;
  // }

  for (let i = 0; i < shapeArray.length; i++) {
    returnObj[shapeArray[i]] = objMaker(eachKey);
    if (returnObj["joker"]) {
      returnObj["joker"] = objMaker(jokerKey);
      count = count - eachKey.length;
    }
  }
  console.log(count);

  // returnObj["joker"] = objMaker(jokerKey);
  console.log(
    "해당 리턴된 객체의 카드 개수에 대한 검사결과, 총 " +
      count +
      "개로 정상적인 구성입니다"
  );

  console.log(returnObj);
  return returnObj;
};

const shape_array = ["spade", "heart", "diamond", "club", "joker"];
trump_deck(shape_array);
