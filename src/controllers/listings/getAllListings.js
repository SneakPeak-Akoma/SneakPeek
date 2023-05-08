const getAllListings = async (req, res) => {
    const {Listings} = req.db;
    const all = await Listings.getAllListings();
    res.send(all)
};

module.exports = getAllListings;