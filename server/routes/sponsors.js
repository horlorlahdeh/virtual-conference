const express = require('express');
const Joi = require('joi');
const { Sponsor, Admin } = require('../db/Models/index');
const router = express.Router();
const auth = require('../middleware/auth');
const { convertJoiErrorToArray } = require('../utils/helpers');

router.post('/add', auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).required(),
    website: Joi.string().uri().required(),
    icon: Joi.string().uri().required(),
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
    const { name, website, icon } = req.body;
    const user = await Admin.findOne({ id: req.user });
    if (user.admin_level < 1) {
      res.status(401).send({
        status: 'failed',
        message: 'Only super admins add sponsors',
      });
    }
    const existing_sponsor = await Sponsor.find({name});
    if (existing_sponsor) {
        res.status(403).send({
            status: 'failed',
            message: 'Sponsor already exists in our records'
        })
    }
    const sponsor = new Sponsor({
      name,
      website,
      icon,
      added_by: user.username,
    });
    const createdSponsor = await sponsor.save();
    res.status(200).send({
      status: 'success',
      message: 'Sponsor addedd successfully',
      data: createdSponsor,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/remove', auth, async (req, res) => {
  const { id } = req.params;
  try {

    const sponsor = await Sponsor.findOneAndDelete({ id });
    if (!sponsor) {
      res.status(404).send({
        status: 'failed',
        message: 'Sponsor does not exist',
      });
    }
    res.status(200).send({
      status: 'success',
      message: 'Sponsor removed successfully',
      data: sponsor,
    });
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
