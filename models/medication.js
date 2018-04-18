const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MedSchema = new Schema({
  createdAt:      { type: Date },
  updatedAt:      { type: Date },

  drugName:       { type: String, required: true },
  dosage:         { type: String, required: true },
  quantity:       { type: Number },
  prescriber:     { type: String, required: true },
  prescriberDEA:  { type: Number, required: true },
  pharmacyID:     { type: Number, required: true }
  // thisPharmacist: [{ type: Schema.Types.ObjectId, ref: 'Pharmacist' }],
})

MedSchema.pre('save', (next) => {
  // SET createdAt AND updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Med', MedSchema)
