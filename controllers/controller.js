// require si model
const User = require('../models/user.js');

// require si view
const View = require('../views/view.js');

// Kita harus bikin controller
class Controller {
  // isinya adalah method yang tidak perlu diinstantiate terlebih dahulu
  static lihatHandler() {
    // kita pengen lihat data kemudian kita tampilin
    // console.log(User.bacaData());
    let result = User.bacaData();
    View.outputMessage(result);
  }
}

module.exports = Controller;