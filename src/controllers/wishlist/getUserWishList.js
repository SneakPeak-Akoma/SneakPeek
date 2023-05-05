const getUsersWishList = async (req, res) => {
    const {
      db: { Wishlist },
      params: { id },
    } = req;
    
    const userList = await Wishlist.getUserWishList(id);
    if (!userList) return res.sendStatus(404);
  
    res.send(userList);
  };
  
  module.exports = getUsersWishList;
  