module.exports = (app) => {
  // CREATE
  app.post('/patient/new', (req,res) => {
    console.log(req.body)
  });
};
