const knex = require('../knex');
class Wishlist {
    constructor({ id, post_id, user_id }) {
        this.id = id;
        this.post_id = post_id;
        this.user_id = user_id;
    }
    static async addToWishList( user_id, post_id) {
        try {
            const query = `INSERT INTO wishlist (user_id, post_id)
            VALUES ((SELECT id FROM users WHERE users.id = ?), 
            (SELECT listings.listing_id FROM listings WHERE listings.listing_id = ?)) RETURNING *`;
            const { rows: [wishlist]} = await knex.raw(query, [user_id,post_id]);
            return new Wishlist(wishlist);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    static async showAllWishLists() {
        try {
          const query = 'SELECT * FROM wishlist';
          const { rows } = await knex.raw(query);
          return rows.map((lists) => new Wishlist(lists));
        } catch (err) {
          console.error(err);
          return null;
        }
      }
    static async removeFromWishList( user_id, post_id) {
        try {
            const query = (`DELETE FROM wishlist WHERE user_id = ? AND post_id = ?`);
            return await knex.raw(query, [user_id,post_id]);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    static async getUserWishList(id) {
        try {
            const query =  `SELECT * FROM wishlist WHERE user_id = ?`;
            const { rows } = await knex.raw(query, [id]);
            const mapped = rows.map((list) => new Wishlist(list))
            return mapped.length != 0 ? mapped: null
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    static async deleteAll() {
        try {
            return knex.raw('DELETE FROM wishlist;');
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

module.exports = Wishlist;