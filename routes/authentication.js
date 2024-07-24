const express = require("express");
const router = express.Router();
const USER = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { JWT_Secret } = require("../key");
router.post("/signup", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(422).json({ error: "Please fill all the fields." });
  } else {
    USER.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          res.status(422).json({ error: "Email is already registered." });
        } else {
          bcrypt
            .hash(password, 10)
            .then((hashPassword) => {
              const newuser = new USER({
                firstname,
                lastname,
                email,
                password: hashPassword,
              });
              newuser
                .save()
                .then((user) => {
                  if (!user) {
                    res.status(422).json({ error: "Error: User not saved." });
                  } else {
                    console.log(user);
                    res
                      .status(200)
                      .json({ message: "User saved successfully." });
                  }
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
});
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please fill all the fields." });
  } else {
    USER.findOne({ email: email }).then((savedUser) => {
      if (!savedUser) {
        res.status(404).json({ error: "User not found." });
      } else {
        bcrypt
          .compare(password, savedUser.password)
          .then((match) => {
            const token = JWT.sign({ _id: savedUser.id }, JWT_Secret);
            console.log(token);
            const { _id, firstname, lastname, email } = savedUser;
            res.status(200).json({
              message: "Login successfully",
              token: token,
              localuser: { _id, firstname, lastname, email },
            });
          })
          .catch((err) => console.log(err));
      }
    });
  }
});
module.exports = router;
