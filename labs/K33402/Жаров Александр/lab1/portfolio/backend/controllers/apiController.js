const User = require("../models/user");

class apiController {
  async getUsers(req, res) {
    try {
      let users = [];
      console.log(req.body);
      if (req.body.search) {
        const searchRegex = new RegExp(req.body.search, "i");
        users = await User.find({ name: searchRegex });
      } else {
        users = await User.find();
      }
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.user.id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async updateUser(req, res) {
    try {
      const { _id, name, photo, email, about, experience, projects, contacts } =
        req.body;

      if (!_id) {
        return res
          .status(400)
          .json({ message: "Отсутствует идентификатор пользователя" });
      }

      const checkEmail = await User.find({ email });

      if (checkEmail.length > 1) {
        return res.status(400).json({ message: "Эта почта уже занята" });
      }

      const existingUser = await User.findById(_id);

      if (!existingUser) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      existingUser.name = name || existingUser.name;
      existingUser.photo = photo || existingUser.photo;
      existingUser.email = email || existingUser.email;
      existingUser.about = about || existingUser.about;
      existingUser.experience = experience || existingUser.experience;
      existingUser.projects = projects || existingUser.projects;
      existingUser.contacts = contacts || existingUser.contacts;

      const updatedUser = await existingUser.save();

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new apiController();
