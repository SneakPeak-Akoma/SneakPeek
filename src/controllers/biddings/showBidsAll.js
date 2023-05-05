const showBidsAll = async (req, res) => {
    const { Bidding } = req.db;
    const allBids = await Bidding.showBidsAll();
    res.send(allBids);
  };
  
module.exports = showBidsAll;