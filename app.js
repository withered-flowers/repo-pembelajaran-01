// // terima input dari terminal
// const arguments = process.argv;

// // Panggil si controller
// const Controller = require('./controllers/controller.js');

// // lihat = baca data dari dummy.json, kemudian tampilkan
// if(arguments[2] === 'lihat') {
//   Controller.lihatHandler();
// }
// else {
//   console.log("error");
// }

// callback ?
// fungsi yang dimasukkan sebagai parameter di dalam sebuah fungsi lainnya

// const fungsiPenjumlahan = (angka1, angka2, callback) => {
//   let hasilPenjumlahan =  angka1 + angka2;
//   callback(hasilPenjumlahan);
// }

// // kita udah bikin fungsinya
// const fungsiPencetak = (angkaHasilPenjumlahan) => {
//   console.log(angkaHasilPenjumlahan);
// }

// // driver
// // fungsiPenjumlahan(100, 200, fungsiPencetak);
// const fungsiLain = (sebuahParameter) => {
//   console.log(sebuahParameter);
// }

// fungsiPenjumlahan(100, 400, fungsiLain);

const fs = require('fs');

fs.readFile('./dummy.json', 'utf8', (err, data) => {
  if(err) {
    return console.log(err);
    // throw err;
  }

  console.log(JSON.parse(data));
});