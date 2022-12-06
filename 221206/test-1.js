// 생성자 함수 연습하기 training-2
// 인스턴스의 프로퍼티(property)를 만들어주는 constructor() 함수
class RgbaColor {
  constructor(red, green, blue, alpha = 1) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  // 생성자 함수의 주요 기능 중 하나인 getter 기능
  // 사용하는 키워드는 get
  get rgba() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}

let pracRgbaColor = new RgbaColor(200, 200, 200);
console.log(pracRgbaColor); // Q-1 어떤 값이 나오는지 테스트 해보기
console.log(pracRgbaColor.rgba); // Q-2 어떤 값이 나오는지 테스트 해보기

class Pokemon {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
  get id() {
    return this.id;
  }
  set id(value) {
    if (Number.isInteger(value) === true) {
      this._id = value;
    } else {
      console.log("id 타입은 정수여야 합니다.");
    }
  }
}
// class 선언
const pikachu = new Pokemon(1, "피카츄", "전기");
console.log(pikachu);
// console.log()에는 무슨 값이 나올까요?
