const arrObj = [
  {
    id: 1,
    answer: "coba"
  },
  {
    id: 1,
    answer: "coba"
  },
  {
    id: 2,
    answer: "coba"
  }
];

const ids = [0, 1];
const arrObj2 = arrObj.filter(i => ids);
console.log(arrObj2);
