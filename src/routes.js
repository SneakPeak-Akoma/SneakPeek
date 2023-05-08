const express = require('express');
const controller = require('./controllers');
const listingController = require('./controllers/listings')
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');


const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/users', controller.create);
Router.post('/users/login', controller.login);

// Read
Router.get('/users', controller.list);
Router.get('/users/:id', controller.show);
Router.get('/me', controller.showMe);
Router.get('/listings', controller.getAllListings)
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, controller.update);

// Delete
Router.delete('/users/logout', controller.logout);

//Wishlist routes
//add to wishlist
Router.post('/wishlist', checkAuthentication ,controller.addToWishlist)
//show all wishlists
Router.get('/wishlist', controller.listWishlists)
//remove from wishlist
Router.delete('/wishlist/', controller.deletedWishListing)
//get user wishlists
Router.get('/wishlist/:id', checkAuthentication ,controller.getUserWishList)

// Bid routes
//Show Specific Bid 
Router.get('/biddings/:id', controller.showBidsSpecific)
//Show All Bids
Router.get('/biddings/', controller.showBidsAll)
//Create New Bid
Router.post('/biddings/', checkAuthentication, controller.createBiddings)

// Listing routes

//Create New Listing
Router.post('/listings', listingController.create);

Router.get('/listings', listingController.getAll);

module.exports = Router;
