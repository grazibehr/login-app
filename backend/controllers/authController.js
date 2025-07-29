const User = require("../models/userModel");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Usuário e senha obrigatórios." });
  }

  User.findUser(username, password, (err, results) => {
    if (err) return res.status(500).json({ message: "Erro no banco" });

    if (results.length > 0) {
      return res.json({ message: "Login bem-sucedido" });
    } else {
      return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
  });
};
