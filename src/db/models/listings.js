/*
1. Class(model) 
    new controller :    
        createListing.js => username, photo, name, location, description, and brand 

*/
const knex = require("../knex");
class Listings {
  constructor({ username, photo, post_name, location, description, brand }) {
    this.username = username;
    this.photo = photo;
    this.post_name = post_name;
    this.location = location;
    this.description = description;
    this.brand = brand;
  }

  static async createListing(
    username,
    photo,
    post_name,
    location,
    description,
    brand
  ) {
    try {
      const query = `INSERT INTO listings (username, photo,post_name,location,description,brand)
    VALUES (?,?,?,?,?,?) RETURNING *`;
      const {
        rows: [listings],
      } = await knex.raw(query, [
        username,
        photo,
        post_name,
        location,
        description,
        brand,
      ]);
      return new Listings(listings);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
