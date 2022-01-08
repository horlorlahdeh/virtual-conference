const express = require('express');
const auth = require('../utils/helpers');
const Joi = require('joi');
const { RSVP } = require('../db/Models');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).required(),
    email: Joi.string().alphanum().min(1).required(),
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
    const { name, email } = req.body;
    const existingRSVP = await RSVP.findOne({ email, confirmed: true });
    if (existingRSVP) {
      res.status(403).send({
        status: 'failed',
        message: 'You already have a reservation',
      });
    }
    const rsvp = new RSVP({
      name,
      email,
    });
    await rsvp.save();
  } catch (err) {
    console.error(err.message);
  }
});
