const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

class authController {
  async registration(req, res) {
    try {
      const { email, name, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({
          message: "Пользователь c этой почтой уже существует",
        });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ email, name, password: hashPassword });

      await user.save();

      return res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользватель с почтой ${email} не найден` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (validPassword) {
        return res.send(user);
      }

      return res.status(400).json({ message: "Неверный пароль" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new authController();
