var User = require('../models/user');
var Patient = require('../models/patient')


module.exports = (app) => {
  // CREATE

  app.get('/portals', function (req, res) {
    var id = req.user._id
    // console.log(req.user._id
    User.findById(req.user._id).then((cur_user) => {
      res.render('portal', { cur_user })
    }).catch((err) => {
      console.log(err.message)
    })
  })


  app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
    console.log(req.cookies)
  });

  app.get('/searchBy', (req, res) => {
        Patient.find({'firstname': req.query.fname, 'lastname': req.query.lname}).then((patient) => {
            res.render('show-patient', {patient, user: req.user})
          }).catch((err) => {
            console.log(err.message)
          })
    })

};
