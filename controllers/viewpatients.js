var Patient = require('../models/patient');
var User = require('../models/user')
var Util = require("./utils")


module.exports = (app) => {
  // CREATE

  app.get('/home', function (req, res) {

    // let userType = Util.checkType(req.user)
    // console.log(userType)

    let checkType = () => {
        User.findById(req.user._id).then((user) => {
            return user.type
        })
    }

    Patient.find({}).then((patients) => {
      res.render('view-patients.hbs', { patients })
      // console.log(req.cookies);
    }).catch((err) => {
      console.log(err.message);
    })
  })

 //  app.get('/patients/:id', function (req, res) {
 //   // LOOK UP THE POST
 //
 //
 //   if (req.user) {
 //       Patient.findById(req.params.id).populate('meds').then((patient) => {
 //           let currentType = ""
 //           currentType = req.user.type === 'pharmacist' ? "isPharmacist" : ""
 //           console.log(currentType)
 //         res.render('show-patient.hbs', { currentType, patient })
 //        }).catch((err) => {
 //         console.log(err.message)
 //        })
 //   } else {
 //       res.render('errorPage/401')
 //       // console.log('Not logged')
 //
 //   }
 // })

 app.get('/patients/:id', function (req, res) {
  // LOOK UP THE POST


  if (req.user) {
      Patient.findById(req.params.id).populate('meds').then((patient) => {

          User.findById(req.user._id).then((user) => {
              return user.type
          }).then((user_type) => {
              currentType = user_type === 'pharmacist' ? "isPharmacist" : "";
              console.log(currentType);
              res.render('show-patient.hbs', { currentType, patient })
          })
       }).catch((err) => {
        console.log(err.message)
       })
  } else {
      res.render('errorPage/401')
      // console.log('Not logged')

  }
})

};
