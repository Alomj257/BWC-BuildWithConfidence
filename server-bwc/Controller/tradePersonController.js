const TradePerson = require('../Model/TradePerson');

// Error handler
const errorHandler = (res, err) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
};

// Get all trade persons
exports.getAllTradePersons = async (req, res) => {
  try {
    const tradePersons = await TradePerson.find();
    res.json(tradePersons);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Get trade person by ID
exports.getTradePersonById = async (req, res) => {
  try {
    const tradePerson = await TradePerson.findById(req.params.id);
    if (!tradePerson) {
      return res.status(404).json({ message: 'Trade person not found' });
    }
    res.json(tradePerson);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Create a new trade person
exports.createTradePerson = async (req, res) => {
  try {
    const tradePerson = await TradePerson.create(req.body);
    res.status(201).json(tradePerson);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Update trade person by ID
exports.updateTradePerson = async (req, res) => {
  try {
    const tradePerson = await TradePerson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tradePerson) {
      return res.status(404).json({ message: 'Trade person not found' });
    }
    res.json(tradePerson);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Delete trade person by ID
exports.deleteTradePerson = async (req, res) => {
  try {
    const tradePerson = await TradePerson.findByIdAndDelete(req.params.id);
    if (!tradePerson) {
      return res.status(404).json({ message: 'Trade person not found' });
    }
    res.json({ message: 'Trade person deleted successfully' });
  } catch (err) {
    errorHandler(res, err);
  }
};
