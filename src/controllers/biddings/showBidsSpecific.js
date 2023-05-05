const showBidsSpecific = async (req, res) => {
    const {
      db: { Bidding },
      params: { id },
    } = req;
    
    const bid = await Bidding.showBidsSpecific(id);
    if (!bid) return res.sendStatus(404);
  
    res.send(bid);
  };
  
  module.exports = showBidsSpecific;
  