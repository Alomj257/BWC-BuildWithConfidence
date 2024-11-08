const mongoose = require("mongoose");
const DigitalSchema = new mongoose.Schema({
  ArchitectDrawing: Boolean,
  DateOfConditionSurvey: String,
  LiquidatedDamage: String,
  Milestone: String,
  PPSService: String,
  Specification: String,
  advancePayment: String,
  bothPayment: Boolean,
  client: [{ address: String, individual: String, institute: String }],
  contractor: [
    {
      address: String,
      companyNo: String,
      individual: String,
      institute: String,
    },
  ],
  constractSum: [
    {
      designFees: { qty: String, rate: String, total: String },
      materialCost: { qty: String, rate: String, total: String },
      labourCost: { qty: String, rate: String, total: String },
      disposalCost: { qty: String, rate: String, total: String },
      cleaningCost: { qty: String, rate: String, total: String },
    },
  ],
  clientName: String,
  companyName: String,
  conpanyName: String,
  contractDate: String,
  contratorName: String,
  dateForCompletion: String,
  defectsLiabilityPeriod: String,
  digitalService: String,
  eachMilestone: String,
  isBothAgree: Boolean,
  isMilestone: Boolean,
  isProtection: Boolean,
  isRetention: Boolean,
  measurements: String,
  partyContact: Boolean,
  procurement: [String],
  requiredToAccess: Boolean,
  retention: String,
  scopeOfWork: String,
  siteAccess: String,
  siteRestrictions: String,
  todayDate: String,
  workCommencementDate: String,
  workingHours: String,
  surveyPhoto: [{ img: String, path: String }],
  clientSignature: [{ img: String, path: String }],
  contractorSigniture: [{ img: String, path: String }],
});

DigitalSchema.pre("save", function (next) {
  const calculateTotal = (cost) => {
    const qty = parseFloat(cost.qty);
    const rate = parseFloat(cost.rate);
    const total = isNaN(qty) || isNaN(rate) ? "" : (qty * rate).toFixed(2);
    return total.toString();
  };

  this.constractSum.forEach((cost) => {
    cost.designFees.total = calculateTotal(cost.designFees);
    cost.materialCost.total = calculateTotal(cost.materialCost);
    cost.labourCost.total = calculateTotal(cost.labourCost);
    cost.disposalCost.total = calculateTotal(cost.disposalCost);
    cost.cleaningCost.total = calculateTotal(cost.cleaningCost);
  });

  next();
});

const DigitalContractModel = mongoose.model("digitalContract", DigitalSchema);

module.exports = DigitalContractModel;
