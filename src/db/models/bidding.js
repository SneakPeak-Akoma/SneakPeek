/*
1. Class(model) 
    new controller :    
    createBidding.js needs to update the bidding table so that it updates the bid id, post id, user id ,user bid. Can use timestamps to display when the bid was made.

*/

class bidding {
  constructor({ bid_id, post_id, user_id, user_bid }) {
    this.bid_id = bid_id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.user_bid = user_bid;
  }
  static async createListing(bid_id, post_id, user_id, user_bid) {
    try {
      const query = `INSERT INTO biddings ( bid_id,post_id,user_id, user_bid)
        VALUES (?,?,?,?) RETURNING *`;
      const {
        rows: [bid],
      } = await knex.raw(query, [bid_id, post_id, user_id, user_bid]);
      return new bidding(bid);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

// const knex = require("../knex");
// class Listings {
//   constructor({ username, photo, post_name, location, description, brand }) {
//     this.username = username;
//     this.photo = photo;
//     this.post_name = post_name;
//     this.location = location;
//     this.description = description;
//     this.brand = brand;
//   }

//   static async createListing(
//     username,
//     photo,
//     post_name,
//     location,
//     description,
//     brand
//   ) {
//     try {
//       const query = `INSERT INTO listings (username, photo,post_name,location,description,brand)
//     VALUES (?,?,?,?,?,?) RETURNING *`;
//       const {
//         rows: [listings],
//       } = await knex.raw(query, [
//         username,
//         photo,
//         post_name,
//         location,
//         description,
//         brand,
//       ]);
//       return new Listings(listings);
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }
// }
