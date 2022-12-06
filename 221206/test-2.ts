let nameArray = ["전형민", "형민전", "민전형", "민형전"];

interface GCAtype {
  name: string;
  birth: number;
  counter: number;
}

class GCA implements GCAtype {
  _name: string;
  _birth: number | string;
  counter: number;
  // _name: string;
  constructor(name: string, birth: number, counter: number) {
    this._name = name;
    this._birth = birth;
    this.counter = counter;
  }

  get name() {
    return this.name;
  }
  get birth() {
    return this.birth;
  }

  set name(value: string) {
    if (!(typeof value === "string")) {
      console.log("이름은 문자열이여야만 합니다.");
    } else {
      this._name = value;
    }
  }
  set birth(value: number) {
    let gagong = value.toString();
    let array: any = [];
    for (let i = 0; i < gagong.length; i++) {
      array[i] = gagong[i];
    }
    array.splice(4, 0, "-");
    array.splice(7, 0, "-");
    array = array.join("");
    this._birth = array;
  }
}

// const jeon = new GCA("전형민", 19950321, 1);

// console.log(jeon);
let studentArray: any = [];
for (let i = 0; i < nameArray.length; i++) {
  let student = new GCA(nameArray[i], 19950321, i);
  studentArray[i] = student;
  // console.log(student);
}

console.log(studentArray);
