const destruct = (obj, ...keys) =>
  keys.reduce((a, c) => ({ ...a, [c]: obj[c] || null }), {});

const object = {
  color: "red",
  size: "big",
  amount: 10,
  name: "parjo",
  percent: 100
};

// old way
const { color, amount, size, name, percent } = object;
const old1 = { color, amount, size };
const old2 = { name, percent };
console.log({ old1, old2 });

// new way
const new1 = destruct(object, "color", "amount", "size");
const new2 = destruct(object, "name", "percent");
console.log({ new1, new2 });
