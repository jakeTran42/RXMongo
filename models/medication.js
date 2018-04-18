const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MedSchema = new Schema({
  createdAt:      { type: Date },

  drugName:       { type: String, required: true },
  dosage:         { type: String, required: true },
  quantity:       { type: Number },
  prescriber:     { type: String, required: true },
  prescriberDEA:  { type: Number, required: true },
  pharmacyID:     { type: Number, required: true }
  // thisPharmacist: [{ type: Schema.Types.ObjectId, ref: 'Pharmacist' }],
})

MedSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  var now = new Date();
  this.createdAt = now;
  next();
});

module.exports = mongoose.model('Med', MedSchema)
