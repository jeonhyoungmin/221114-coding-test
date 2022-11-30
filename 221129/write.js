/**
 * @params {file} 파일 이름. 상대 경로로 작성
 * @params {contents} 파일 내용
 * @return 없음 - (파일 생성)
 *
 * @description
 * module.exports = (file, contents) => {
 * const fs = require("fs");
 * fs.writeFileSync(file, contents);
 * };
 */

module.exports = (file, contents) => {
  const fs = require("fs");
  fs.writeFileSync(file, contents);
};
