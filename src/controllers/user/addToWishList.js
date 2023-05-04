const addToWishList = async (req, res) => {
    const {
      //session,
      db: { wishlist },
      body: {user_id,post_id},
    } = req;
    const wishListItem = await wishlist.addToWishList( user_id, post_id);
    res.send(wishListItem);
  };
  
  module.exports = addToWishList;