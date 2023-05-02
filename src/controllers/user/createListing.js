const createListings = async (req, res) => {
    const {
      session,
      db: { listings },
      body: { username, photo, post_name, location, description, brand},
    } = req;
    const listing = await Listings.createListing( username, photo, post_name, location, description, brand);
    res.send(listing);
  };
  
  module.exports = createListings;
  