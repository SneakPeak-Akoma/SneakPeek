const listWishlists = async (req, res) => {
  const { Wishlist } = req.db;
  const lists = await Wishlist.showAllWishLists();
  res.send(lists);
};

module.exports = listWishlists;

  