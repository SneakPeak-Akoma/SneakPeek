const deletedWishListing = async (req, res) => {
    const {
        session,
        db: { Wishlist },
        body: {post_id},
      } = req;
    const userList = await Wishlist.removeFromWishList(session.userId ,post_id);
    console.log(`Successfully Deleted Wish Listing ${post_id} From User ${session.userId}`);
    res.sendStatus(204);
  };
  
module.exports = deletedWishListing;