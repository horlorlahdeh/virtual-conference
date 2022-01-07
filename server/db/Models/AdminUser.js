const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    default: 'support@splinterlands.com',
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminUsersModel = mongoose.model('admin-user', AdminUserSchema);

module.exports = AdminUsersModel;
