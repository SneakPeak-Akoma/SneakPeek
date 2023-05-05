const createNewBidding = async (req, res) => {
    const {
      session,
      db: { Bidding },
      body: {user_bid, post_id},
    } = req;
    const bid = await Bidding.createBiddings(user_bid, post_id, session.userId);
    res.send(bid);
  };
  
  module.exports = createNewBidding;
  