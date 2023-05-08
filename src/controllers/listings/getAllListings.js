const getAllListings = async (req, res) => {
    const {Listings} = req.db;
    console.log("fuck this sht")
    const all = await Listings.getAllListings();
    res.send(all)
};

module.exports = getAllListings;