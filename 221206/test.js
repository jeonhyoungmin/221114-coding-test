// /**
//  *  * Todo : 그린컴퓨터아트학원 훈련생명단 만들기
//  *
//  *  ? 학사 행정팀에서 학사 운영을 진행하려면, 훈련생 한명에 대한 다음과 같은 정보가 필요하다.
//  * * 임의의 훈련생
//  * * 1. 이름: 공욱재 // 문자열
//  * * 2. 생년월일: 19930920 // 년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여덟자리로 구성된 문자열이어야 한다.
//  *  * 3. NCS직종: {
//  *  *       번호: 1 // 문자열
//  *  *       이름: 정보기술개발 // 문자열
//  *  *     }
//  *  * 4. 훈련강의실: 305호 // 문자열이어야 하며, 상황에 따라 다른 호수로 배정될 수 있다.
//  *  * 5. 연락처: 010-9139-0957 // 문자열이어야 하며, 전화번호 규격에 맞게 "-" 하이픈이 들어가야 한다.
//  *  * 6. 이메일: kongukjae@gmail.com // 문자열이어야 하며, @ atsign(골뱅이)표시와 도메인 규격인 .(닷)이 들어가야한다.
//  *  * 7. 훈련강의명: K-ONG minam Training // 문자열
//  *  * 8. 훈련시작일: 2022-07-19 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연, 월, 일에 맞게 "-" 하이픈이 들어가야한다.
//  *  * 9. 훈련종료일: 2023-01-05 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연, 월, 일에 맞게 "-" 하이픈이 들어가야한다.
//  *  * 10. 훈련생번호: 305-01 // "-" 하이픈 기준 좌측(앞) 부분은 4번 훈련강의실 항목이어야 하며, 훈련생 번호는 누산(카운트)된 형태여야 한다.
//  *
//  */

// class GCA {
//   constructor(
//     name,
//     bir,
//     ncsNumber,
//     area,
//     classRoom,
//     phone,
//     email,
//     subject,
//     start,
//     end,
//     number
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

//   set name(value) {
//     if (!(typeof value === "string")) {
//       console.log("이름은 문자열이여야만 합니다.");
//     } else {
//       this._name = value;
//     }
//   }
//   set bir(value) {
//     if (!(typeof value === "number")) {
//       console.log("생년월일은 8자리 숫자로 작성해주세요");
//     } else {
//       value = value.toString();
//       let makeArray = [];
//       for (let i = 0; i < value.length; i++) {
//         makeArray[i] = value[i];
//       }
//       makeArray.splice(4, 0, "-");
//       makeArray.splice(7, 0, "-");
//       makeArray = makeArray.join("");
//       this._bir = makeArray;
//     }
//   }

//   set ncs(value) {
//     if (!(typeof value.number === "number")) {
//       console.log("NCS 직종 번호는 숫자로 입력해야 합니다.");
//     } else {
//       if (!(typeof value.area === "string")) {
//         console.log("NCS 직종 분야는 문자로 입력해야 합니다.");
//       } else {
//         this._ncs = {
//           number: value.number.toString(),
//           area: value.area,
//         };
//       }
//     }
//   }
//   set classRoom(value) {
//     // console.log(value);
//   }
//   set phone(value) {
//     // console.log(value);
//   }
//   set email(value) {
//     // console.log(value);
//   }
//   set subject(value) {
//     // console.log(value);
//   }
//   set start(value) {
//     // console.log(value);
//   }
//   set end(value) {
//     // console.log(value);
//   }
//   set number(value) {
//     // console.log(value);
//   }
// }

// const jeon = new GCA(
//   "전형민",
//   19950321,
//   1,
//   "정보기술개발",
//   "305호",
//   "01075098671",
//   "jhm7509",
//   "공미남의 트레이닝",
//   "202207",
//   "202301",
//   "305-1"
// );

// console.log(jeon);
