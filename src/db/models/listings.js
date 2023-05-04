/*
1. Class(model) 
    new controller :    
        createListing.js => username, photo, name, location, description, and brand 

*/

const knex = require("../knex");
class Listings {
  constructor({ listing_id, listing_name, description, brand, user_id, photo,location }) {
    this.listing_id = listing_id;
    this.listing_name = listing_name; 
    this.description = description;
    this.brand = brand;
    this.user_id = user_id;
    this.photo = photo;
    this.location = location;
  }

  static async createListing(
        listing_id, 
        listing_name, 
        description,
        brand, 
        photo,
        location
  ) {
    try {
      const query = `INSERT INTO listings (listing_id, listing_name, description, brand,photo,location)
    VALUES (?,?,?,?,?,?) RETURNING *`;
      const {
        rows: [listings],
      } = await knex.raw(query, [
        listing_id, 
        listing_name, 
        description,
        brand, 
        photo,
        location
      ]);
      return new Listings(listings);
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