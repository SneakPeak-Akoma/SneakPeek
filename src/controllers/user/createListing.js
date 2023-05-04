const createListings = async (req, res) => {
    const {
      session,
      db: { listings },
      body: { listing_id, listing_name, description, brand, user_id, photo,location},
    } = req;
    const listing = await Listings.createListing(listing_id, listing_name, description, brand, user_id, photo,location);
    res.send(listing);
  };
  
  module.exports = createListings;
  