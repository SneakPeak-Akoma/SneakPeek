const addToWishList = async (req, res) => {
    const {
      session,
      db: { wishlist },
      body: {id,post_id,user_id},
    } = req;
    const wishListItem = await wishlist.addToWishList( id,post_id,user_id);
    res.send(wishListItem);
  };
  