const addToWishlist = async (req, res) => {
  const {
    session,
    db: { Wishlist },
    body: {post_id},
  } = req;
  const newWishlistItem = await Wishlist.addToWishList(session.userId, post_id);
  res.send(newWishlistItem);
};

module.exports = addToWishlist;