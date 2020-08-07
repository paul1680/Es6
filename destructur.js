const student = {
    name : 'jack',
    id : 123,
    address : 'Kochukhet',
}
const {id, address} = student;
console.log(id, address);

const n = ['sakib', 'fatema', 'rukaiya', 'Irina'];
const [first, ...rest] = n;
console.log(first, rest);

const e = {
    age: 20,
    info: {
        rank: 'major',
        id : 343,
    }
}
const {rank} = e.info;
console.log(rank);