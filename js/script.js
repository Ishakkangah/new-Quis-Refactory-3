// lopping nilai
// cek nilai 1- 15
// if nilai tersebut sama dengan x case 11 push ke dalam array

const angka = 15;
const angkaBaru = [];

for (let i = 1; i <= angka; i++) {
  switch (i) {
    case 1:
      const x1 = 1;
      angkaBaru.push(x1);
      break;
    case 2:
      const x2 = 2;
      angkaBaru.push(x2);
    case 3:
      const x3 = "fizz";
      angkaBaru.push(x3);
    case 4:
      const x4 = 4;
      angkaBaru.push(x4);
    case 5:
      const x5 = "buzz";
      angkaBaru.push(x5);
    case 6:
      const x6 = "fizz";
      angkaBaru.push(x6);
    case 7:
      const x7 = 7;
      angkaBaru.push(x7);
    case 8:
      const x8 = 8;
      angkaBaru.push(x8);
    case 9:
      const x9 = "fizz";
      angkaBaru.push(x9);
    case 10:
      const x10 = "buzz";
      angkaBaru.push(x10);
    case 11:
      const x11 = 11;
      angkaBaru.push(x11);
    case 12:
      const x12 = 12;
      angkaBaru.push(x12);
    case 13:
      const x13 = 13;
      angkaBaru.push(x13);
    case 14:
      const x14 = 14;
      angkaBaru.push(x14);
    case 15:
      const x15 = "buzz";
      angkaBaru.push(x15);
    default:
      break;
  }
}
const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] =
  angkaBaru;
const [...data] = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
];
// console.log("angaka1", a1);
// console.log("angaka2", a2);
// console.log("angaka3", a3);
// console.log("angaka4", a4);
// console.log("angaka5", a5);
// console.log("angaka6", a6);
// console.log("angaka7", a7);
// console.log("angaka8", a8);
// console.log("angaka9", a9);
// console.log("angaka10", a10);
// console.log("angaka11", a11);
// console.log("angaka12", a12);
// console.log("angaka13", a13);
// console.log("angaka14", a14);
// console.log("angaka15", a15);
console.log(data.length);

const button = document.getElementById("button");
document.body.innerHTML = `<h1> nilai array = ${data}</h1>
<h1> total array = ${data.length}</h1?
`;
