const yValue = [0, 500, 1000, 1500, 2000, 2500];
yValue.sort((a, b) => {
  return b - a;
});
const xValue = ["", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];

const kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995];

const root = document.getElementById("root");
root.style.width = "100vw";
root.style.height = "100vh";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";

const tagMaker = (tagname, style, id, parent = "", number = "", text = "") => {
  for (let i = 0; i < number; i++) {
    let tagName = document.createElement(tagname);
    for (let key in style) {
      tagName.style[key] = style[key];
    }
    tagName.id = id;
    parent.append(tagName);
  }
};

const liMaker = (tagname, style, id, parent = "", number = "", value = "") => {
  for (let i = 0; i < number; i++) {
    let tagName = document.createElement(tagname);
    for (let key in style) {
      tagName.style[key] = style[key];
    }
    tagName.innerHTML = value[i];
    tagName.id = id + (i + 1);
    parent.append(tagName);
  }
};

const valueMaker = (tagname, style, id, parent = "", number) => {
  let tagName = document.createElement(tagname);
  for (let key in style) {
    tagName.style[key] = style[key];
  }
  let parentValue = document.getElementById(parent);
  tagName.id = id + (number + 1);
  parentValue.append(tagName);
};

tagMaker(
  "div",
  {
    width: "1000px",
    height: "500px",
    border: "1px solid pink",
    borderTop: "1px solid white",
    borderRight: "1px solid white",
  },
  "chart",
  root,
  1
);

tagMaker(
  "ul",
  {
    width: "50px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "yul",
  chart,
  1
);

tagMaker(
  "ul",
  {
    width: "1000px",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
  },
  "xul",
  chart,
  1
);

liMaker(
  "li",
  {
    width: "50px",
    height: "20px",
    listStyle: "none",
  },
  "yli",
  yul,
  yValue.length,
  yValue
);

liMaker(
  "li",
  {
    width: "100px",
    height: "50px",
    listStyle: "none",
  },
  "xli",
  xul,
  xValue.length,
  xValue
);

let xvalueId = [];
for (let i = 0; i < xValue.length - 1; i++) {
  xvalueId[i] = "xli" + (i + 2);
}
// console.log(xvalueId);

const bar_chart = (data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    valueMaker(
      "div",
      {
        width: "80px",
        // height: `${data[i] * 0.2}px`,
        // height: 0,
        backgroundColor: "greenyellow",
        position: "relative",
        // 기본 높이 23px
        // bottom: `${data[i] * 0.2 + 23}px`,
        // bottom: "23px",
        right: "33px",
      },
      "value",
      xvalueId[i],
      i + 1
    );
  }
};
bar_chart(kdt_invest);

document.addEventListener("click", (e) => {
  console.log(e.clientY);
});

const effectFuc = (target, i) => {
  const animation = setInterval(() => {
    if (heightValue >= kdt_invest[i] * 0.2 - 0.2) {
      clearInterval(animation);
      target.innerHTML = kdt_invest[i];
    }
    target.style.bottom = `${bottomValue + 23}px`;
    target.style.height = `${heightValue}px`;
    heightValue += 0.1;
    bottomValue += 0.1;
    // console.log(heightValue);
    // console.log(target);
  });
};
let bottomValue = 0;
let heightValue = 0;

chart.addEventListener("click", () => {
  for (let i = 0; i < xvalueId.length; i++) {
    let target = document.getElementById("value" + (i + 2));
    // console.log(target);
    effectFuc(target, i);
  }
});
// console.log(xli2.clientY);
// 값 0은 clientY 735
// 값 500 당 100 clinetY 차이
// 값 5 = 1
// 값 1 = 0.2
// 1 clientY = 1px

// 값 2000 = 약 400 px
// 값 1 = 0.2
