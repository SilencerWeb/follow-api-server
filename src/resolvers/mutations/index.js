const { createUser, updateUser, deleteUser } = require('./user');


const Mutation = {
  createUser,
  updateUser,
  deleteUser,
};


module.exports = { Mutation };