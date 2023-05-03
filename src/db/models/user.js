const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');

class User {
  #passwordHash = null;

  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({ id, username, password_hash, email }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.email = email;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM users';
      const { rows } = await knex.raw(query);
      return rows.map((user) => new User(user));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM users WHERE id = ?';
      const { rows: [user] } = await knex.raw(query, [id]);
      return user ? new User(user) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async findByUsername(username) {
    try {
      const usernameQuery= 'SELECT * FROM users WHERE username = ? ';
      const emailQuery = 'SELECT * FROM users WHERE email = ? ';
      let { rows: [email] } = await knex.raw(usernameQuery, [username]);
      let { rows: [usernames] } = await knex.raw(emailQuery, [username]);
      console.log(email,usernames)
      return usernames ? new User(usernames):
      email? new User(email): null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  
  static async create(username, password, email) {
    try {
      const passwordHash = await authUtils.hashPassword(password);

      const query = `INSERT INTO users (username, password_hash, email)
        VALUES (?, ?, ?) RETURNING *`;
      const { rows: [user] } = await knex.raw(query, [username, passwordHash, email]);
      return new User(user);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex.raw('DELETE FROM users;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    try {
      const [updatedUser] = await knex('users')
        .where({ id: this.id })
        .update({ username })
        .returning('*');
      return updatedUser ? new User(updatedUser) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
