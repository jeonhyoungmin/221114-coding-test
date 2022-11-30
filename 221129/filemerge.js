/**
 *
 * @param {array} fileArray 파일 내용물 하나로 만들기
 */

module.exports = (fileArray) => {
  let filemerge = "";

  fileArray.map((value) => {
    filemerge += value + "<br>";
  });
  console.log(filemerge);
};
