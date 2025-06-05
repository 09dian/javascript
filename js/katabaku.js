const angka1 =Math.floor(Math.random() * 1000);
const angka2 =Math.floor(Math.random() * 1000);

const operators = ['+', '-', '*', '/'];
const operator = operators[Math.floor(Math.random() * operators.length)];

document.querySelector('.angka1').textContent = angka1;
document.querySelector('.angka2').textContent = angka2;
 document.querySelector('.operator').textContent = operator;

 const jawaban = eval(`${angka1} ${operator} ${angka2}`);
document.querySelector('.hasil').textContent = jawaban;
