const list = require('./user/list');
const create = require('./user/create');
const show = require('./user/show');
const update = require('./user/update');
const login = require('./user/login');
const logout = require('./user/logout');
const showMe = require('./user/show-me');
const createBiddings = require('./biddings/createBidding')
const showBidsSpecific = require('./biddings/showBidsSpecific')
const showBidsAll = require('./biddings/showBidsAll')
const showWishList = require('./wishlist/getWishList')
const getUserWishList = require('./wishlist/getUserWishList')
const listWishlists = require('./wishlist/getWishList')
const addToWishlist = require('./wishlist/addToWishList')
const deletedWishListing = require('./wishlist/removeFromWishList')
const createListings = require('./listings/createListing')
const getAllListings = require('./listings/getAllListings')
module.exports = {
  list,
  create,
  show,
  update,
  login,
  logout,
  showMe,
  createListings,
  createBiddings,
  showWishList,
  showBidsSpecific,
  showBidsAll,
  getUserWishList,
  listWishlists,
  addToWishlist,
  deletedWishListing,
  getAllListings,
};
