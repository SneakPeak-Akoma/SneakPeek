const knex = require("../knex");
class Listings {
  constructor({ listing_id, listing_name, description, brand, user_id, photo, bid_price, end_date,location }) {
    this.listing_id = listing_id;
    this.listing_name = listing_name; 
    this.description = description;
    this.brand = brand;
    this.user_id = user_id;
    this.photo = photo;
    this.bid_price = bid_price
    this.end_date = end_date;
    this.location = location;
  }

  static async createListing(
        listing_name, 
        description,
        user_id,
        brand, 
        photo,
        bid_price,
        end_date,
        location
  ) {
    try {
      const query = `INSERT INTO listings (listing_name, description, brand, user_id, photo, bid_price, end_date,location)
    VALUES (?,?,?,?,?,?,?,?) RETURNING *`;
      const {
        rows: [listings],
      } = await knex.raw(query, [
        listing_name, 
        description,
        user_id,
        brand, 
        photo,
        bid_price,
        end_date,
        location
      ]);
      return new Listings(listings);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async getUsersListings (id) {
    try {
        const query =  `SELECT * FROM listings WHERE user_id = ?`;
        const { rows } = await knex.raw(query, [id]);
        const mapped = rows.map((list) => new Listings(list))
        return mapped.length != 0 ? mapped: null
    } catch (err) {
        console.error(err);
        return null;
    }
}
  static async deleteAll() {
    try {
      return knex.raw('DELETE FROM listings;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Listings;