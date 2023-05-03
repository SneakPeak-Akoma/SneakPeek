const createBiddings = async (req, res) => {
    const {
      session,
      db: { biddings },
      body: {user_bid},
    } = req;
    const bid = await bidding.createBiddings(user_bid);
    res.send(bid);
  };
  
  module.exports = createBiddings;
  