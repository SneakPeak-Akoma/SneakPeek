const User = require('../models/user')
const Listings = require('../models/listings');
const Bid = require('../models/bidding')
const WishList = require('../models/wishlist')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // await Bid.deleteAll();
  // await User.deleteAll();
  // await Listings.deleteAll();
  // await User.create('jjj', 'jjj', 'jjj@gmail.com');
  //  await Listings.createListing('Yeezy Pirate Blacks','the yeezy pirate blacks', 'Jordan', ,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvsbattles.fandom.com%2Fwiki%2FKaladin_Stormblessed&psig=AOvVaw2mzizzoxU0xcNnc494PX3i&ust=1683225354748000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKit15zl2f4CFQAAAAAdAAAAABAQ', 'brooklyn');
  // console.log(await Bid.createBiddings(3005, 1, 14))
};