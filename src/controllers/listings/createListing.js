const createListings = async (req, res) => {
    const {
      session,
      db: { Listings },
      body: { listing_name, description, brand, photo,bid_price,end_date,location},
    } = req;
    const listing = await Listings.createListing(
      listing_name, 
      description, 
      brand, 
      session.userId, 
      photo,
      bid_price,
      end_date
      ,location);
    res.send(listing);
  };
  
  module.exports = createListings;
  