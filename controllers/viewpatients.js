var Patient = require('../models/patient');


module.exports = (app) => {
  // CREATE

  app.get('/home', function (req, res) {
    Patient.find({}).then((patients) => {
      res.render('view-patients.hbs', { patients })
      // console.log(req.cookies);
    }).catch((err) => {
      console.log(err.message);
    })
  })

  app.get('/patients/:id', function (req, res) {
   // LOOK UP THE POST
   Patient.findById(req.params.id).populate('meds').then((patient) => {
     res.render('show-patient.hbs', { patient })
   }).catch((err) => {
     console.log(err.message)
   })
 })

};
