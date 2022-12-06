// interface GCAtype {
//   name: string;
//   // _name: string;
//   bir: number;
//   // _bir: number;
//   classRoom: string;
//   phone: number;
//   email: string;
//   subject: string;
//   start: number;
//   end: number;
//   number: string;
//   ncs: {
//     number: number;
//     area: string;
//   };
// }

// class GCA implements GCAtype {
//   // _bir: number;
//   ncs: { number: number; area: string };
//   classRoom: string;
//   phone: number;
//   email: string;
//   subject: string;
//   start: number;
//   end: number;
//   number: string;
//   private _name: string;
//   private _bir: any;
//   // _name: string;
//   constructor(
//     name: string,
//     bir: number,
//     ncsNumber: number,
//     area: string,
//     classRoom: string,
//     phone: number,
//     email: string,
//     subject: string,
//     start: number,
//     end: number,
//     number: string
//   ) {
//     this.name = name;
//     this.bir = bir;
//     this.ncs = {
//       number: ncsNumber,
//       area: area,
//     };
//     this.classRoom = classRoom;
//     this.phone = phone;
//     this.email = email;
//     this.subject = subject;
//     this.start = start;
//     this.end = end;
//     this.number = number;
//   }

//   // get name() {
//   //   return this._name;
//   // }
//   // get bir() {
//   //   return this.bir;
//   // }
//   // get ncsNumber() {
//   //   return this.area;
//   // }
//   // get area() {
//   //   // return this.area;
//   // }
//   // get classRoom() {
//   //   return this.classRoom;
//   // }
//   // get phone() {
//   //   return this.phone;
//   // }
//   // get email() {
//   //   return this.email;
//   // }
//   // get subject() {
//   //   return this.subject;
//   // }
//   // get start() {
//   //   return this.start;
//   // }
//   // get end() {
//   //   return this.end;
//   // }
//   // get number() {
//   //   return this.number;
//   // }

//   set name(value: string) {
//     if (!(typeof value === "string")) {
//       console.log("이름은 문자열이여야만 합니다.");
//     } else {
//       this._name = value;
//     }
//   }
//   set bir(value: number) {
//     if (!(typeof value === "number")) {
//       console.log("생년월일은 8자리 숫자로 작성해주세요");
//     } else {
//       let gagong = value.toString();
//       let makeArray: any = [];
//       for (let i = 0; i < gagong.length; i++) {
//         makeArray[i] = value[i];
//       }
//       makeArray.splice(4, 0, "-");
//       makeArray.splice(7, 0, "-");
//       makeArray = makeArray.join("");
//       this._bir = makeArray;
//     }
//   }

//   // set ncs(value) {
//   //   if (!(typeof value.number === "number")) {
//   //     console.log("NCS 직종 번호는 숫자로 입력해야 합니다.");
//   //   } else {
//   //     if (!(typeof value.area === "string")) {
//   //       console.log("NCS 직종 분야는 문자로 입력해야 합니다.");
//   //     } else {
//   //       this._ncs = {
//   //         number: value.number.toString(),
//   //         area: value.area,
//   //       };
//   //     }
//   //   }
//   // }
//   // set classRoom(value) {
//   //   // console.log(value);
//   // }
//   // set phone(value) {
//   //   // console.log(value);
//   // }
//   // set email(value) {
//   //   // console.log(value);
//   // }
//   // set subject(value) {
//   //   // console.log(value);
//   // }
//   // set start(value) {
//   //   // console.log(value);
//   // }
//   // set end(value) {
//   //   // console.log(value);
//   // }
//   // set number(value) {
//   //   // console.log(value);
//   // }
// }

// const jeon = new GCA(
//   "전형민",
//   19950321,
//   1,
//   "정보기술개발",
//   "305호",
//   1075098671,
//   "jhm7509",
//   "공미남의 트레이닝",
//   202207,
//   202301,
//   "305-1"
// );

// console.log(jeon);
