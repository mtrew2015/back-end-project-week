const db = require('../dbConfig');

module.exports = {
  insertUser: (user) => {
    returning('id').insert(user)
  },
  findByUsername: (username) => {
    return db('users').where('username', username).first();
  },
  findByID: (id) => {
    return db('users').where('id', id).last();
  }
}