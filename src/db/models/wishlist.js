
const knex = require('../knex');
class wishlist {
    constructor({ id, post_id, user_id }) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
}
static async AddToWishList( user_id, post_id) {
    try {
        const query = `
        INSERT INTO wishlist (user_id, post_id)
VALUES ((SELECT id FROM users WHERE users.id = ?),
(SELECT id FROM listings WHERE listing.id = ?);`;
    const {
        rows: [wishlist],
    } = await knex.raw(query, [user_id,post_id]);
        return new wishlist(wishlist);
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
// static async getListedItem(post_id){
//     try{
//         const query= `SELECT * FROM wishlist WHERE post_id = ?`
//         const {rows:[wishlist]} = await knex.raw(query, [post_id])
//     }
// }
}

module.exports = wishlist;