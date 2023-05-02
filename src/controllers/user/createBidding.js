const createBiddings = async (req, res) => {
    const {
      session,
      db: { biddings },
      body: {bid_id, post_id, user_id, user_bid},
    } = req;
    const bid = await bidding.createBiddings(bid_id, post_id, user_id, user_bid);
    res.send(bid);
  };
  
  module.exports = createBiddings;
  