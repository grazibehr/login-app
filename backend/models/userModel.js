const db = require("../config/db");

exports.findUser = (username, password, callback) => {
  const sql = "SELECT * FROM usuarios WHERE username = ? AND password = ?";
  db.query(sql, [username, password], callback);
};
