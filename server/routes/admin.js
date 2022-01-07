const express = require('express');
const Joi = require('joi');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Admin } = require('../db/Models/index');
const { convertJoiErrorToArray } = require('../utils/helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({
    status: 'OK',
    message: 'Admin routes working successfully',
  });
});

router.post('/create', async (req, res) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    full_name: Joi.string().min(3).required(),
    username: Joi.string().alphanum().min(3).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    confirm_password: Joi.string().required().valid(Joi.ref('password')),
  });

  try {
    //validate user data
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
  } catch (err) {
    const errorMessage = {
      status: 'failed',
      error: convertJoiErrorToArray(err.message),
    };
    res.status(400).json(errorMessage);
    return;
  }
  try {
    const { username, full_name, email, password } = req.body;
    const user = await Admin.findOne({ username });
    if (user) {
      res.status(400).json({
        status: 'OK',
        message: 'User already exist',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Admin({
      full_name,
      username,
      email,
      password: hashedPassword,
    });
    const createdUser = await newUser.save();
    const userPayload = {
      email: createdUser.email,
      id: createdUser.id,
    };
    const token = JWT.sign(userPayload, process.env.JWT_SECRET);
    console.log(user);
    res.status(200).send({
      status: 'OK',
      ...createdUser,
      token,
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
