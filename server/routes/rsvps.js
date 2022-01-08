const express = require('express');
const auth = require('../middleware/auth');
const Joi = require('joi');
const { RSVP, Admin } = require('../db/Models');

const router = express.Router();

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
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

router.get('/', auth, async (req, res) => {
  try {
    const user = await Admin.findOne({ _id: req.user });
    if (user && user.admin_level < 1) {
      res.status(401).send({
        status: 'failed',
        message: 'Only Super Admins are allowed to access RSVP data',
      });
      return;
    }
    const rsvps = await RSVP.find();
    res.status(200).send({
      status: 'success',
      message: 'RSVPs retrieved successfully',
      data: rsvps,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/confirm', auth, async (req, res) => {
  try {
    const { id, status } = req.body;
    const user = await Admin.findOne({ _id: req.user });
    if (user && user.admin_level < 1) {
      res.status(401).send({
        status: 'failed',
        message: 'Only Super Admins are allowed to change RSVP data',
      });
      return;
    }
    const rsvp = await RSVP.findOneAndUpdate(
      { _id: id },
      { confirmed: status },
    );
    res.status(200).send({
      status: 'success',
      message: 'RSVP status updated successfully',
      data: rsvp,
    });
  } catch (error) {}
});

module.exports = router;
