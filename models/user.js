// fs
const fs = require('fs');

class User {
  constructor(name, jobTitle, phone, address) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.phone = phone;
    this.address = address;
  }

  static bacaData() {
    // Jangan lupa balikin path
    let tampunganData = fs.readFileSync('./dummy.json', 'utf8');
    tampunganData = JSON.parse(tampunganData);

    // MEMBUAT SEBUAH ARRAY BARU yang ISINYA adalah element
    // yang sudah di return !
    let arrayBaru = tampunganData.map(element => {
      return new User(
        element.name,
        element.jobTitle,
        element.phone,
        element.address
      );
    });
    
    // HARUS ada sesuatu yang direturn
    return arrayBaru;
  }
}

// Debug
// User.bacaData();

module.exports = User;