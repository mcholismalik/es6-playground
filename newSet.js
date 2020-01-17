let data1 = [1, 3];
let data2 = ["ahmad", "parjo", "budi", "doni"];

const found = data2.filter((v, i) => data1.includes(i + 1));

console.log(found);
