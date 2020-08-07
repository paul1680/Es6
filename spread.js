const a = [2, 7, 9, 7, 4, 8, 4];
const b = [23, 45, 67, 72, 76, 89, 54]
const c = a.concat(b).concat(78);
const d = [...a, 7999, ...b];
const e = Math.max(...b);
console.log(e);
