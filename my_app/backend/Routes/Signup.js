const express = require("express");
const router = express.Router();

const User = require("../models/User");

const { body, validationResult } = require("express-validator");
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken")
const jwtSecret="mynameisharrypotter123456789ronwisely"
// router.post(
//   "/createuser",
//   [
//     body("email", "Incorrect email").isEmail(),
//     body("name").isLength({ min: 5 }),
//     body("password", "Incorrect Password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     const errors = validationerrors(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     res.send({ errors: errors.array() });
//     try {
//       await User.create({
//         name: req.body.name,
//         location: req.body.location,
//         email: req.body.email,
//         password: req.body.password,
//       }).then(res.json({ success: true }));
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );
//for sign up
router.post(
  "/creatuser",
  [
    body("email", "invalid email").isEmail(),
    body("name", "invalid name").isLength({ min: 5 }),
    body("password", "invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //generally all the bcrypt are async function therefore we have to written await
const salt=await bcrypt.genSalt(10);
let secPassword=await bcrypt.hash(req.body.password,salt)//hash has two parameters
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
//for login
//findOne is mongoDBall
//User Data will give all the data of user
router.post(
  "/loginuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Try logging with correct credentials" });
      }
      const passComapare=await bcrypt.compare(req.body.password,userData.password)
      if (!passComapare) {
        return res.status(400).json({ errors: "Try logging with correct credentials" });
      }
      //here data is object
      const data={
        user:{
          id:userData._id
        }
      }
      const authToken=jwt.sign(data,jwtSecret)
      return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
