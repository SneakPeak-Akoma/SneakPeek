const User = require('../db/models/user');
const Bidding = require('../db/models/bidding');
const Wishlist = require('../db/models/wishlist');
const Listings = require('../db/models/listings');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Bidding,
    Wishlist,
    Listings
  };
  next();
};



module.exports = addModels;
