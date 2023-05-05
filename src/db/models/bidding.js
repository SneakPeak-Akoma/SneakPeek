const knex = require("../knex");
class Bidding {
  constructor({ id, post_id, user_id, user_bid, created_at }) {
    
    this.bid_id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.user_bid = user_bid;
    this.created_at = created_at
  }
  static async createBiddings(user_bid, post_id, user_id) {
    try {
      const query = `INSERT INTO biddings (user_bid, post_id, user_id)
        VALUES (?, (SELECT listing_id FROM listings WHERE listing_id = ?), (SELECT id FROM users WHERE id = ?)) 
        RETURNING *`;
      const {
        rows: [bid],
      } = await knex.raw(query, [user_bid, post_id, user_id]);
       console.log(bid)
      return new Bidding(bid);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async highestBid(post_id){
    try {
      const query = `SELECT *
      FROM biddings
      WHERE post_id = ?
      ORDER BY user_bid DESC LIMIT 1`;
      const { rows: [highestBidder] } = await knex.raw(query, [post_id]);
      return highestBidder ? new Bidding(highestBidder) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async showBidsSpecific(post_id){
    try {
      const query = `SELECT * FROM biddings WHERE post_id = ?`;
      const { rows } = await knex.raw(query, [post_id]);
      const mapped = rows.map((bidders) => new Bidding(bidders))
      return mapped.length != 0 ? mapped: null
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async showBidsAll(){
    try {
      const query = `SELECT * FROM biddings`;
      const { rows } = await knex.raw(query);
      console.log(rows)
      return rows.map((bidders) => new Bidding(bidders));    
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async deleteAll() {
    try {
      return knex.raw('DELETE FROM biddings;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
module.exports = Bidding;