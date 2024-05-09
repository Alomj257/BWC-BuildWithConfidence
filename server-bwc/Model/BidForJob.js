const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
    },
    tradepersonId: {
      type: String,
    },
    consumerId: String,
    bids: [{ consumerBid: String, tradepersonBid: String }],
    document: String,
    duration: String,
    expireQuotation: String,
    bidType: String,
  },
  { timestamps: true }
);

const BidModel = mongoose.model("bid", bidSchema);

module.exports = BidModel;
