const passport = require('passport');

module.exports.create = (req, res, next) => {
  res.send(`
    TODO: should render a form used to log in!
  `);
}

module.exports.doCreate = (req, res, next) => {
  res.send(`
    TODO: will receive email and password from body and use passport local auth.
    Render form with errors if wrong email or password!
    Redirect to main page after successful login
  `);
}

module.exports.delete = (req, res, next) => {
  res.send(`
    TODO: destroy session data and redirect to login
  `);
}

module.exports.createWithIDPCallback = (req, res, next) => {
  res.send(`
    TODO: callback for social login. use the right strategy (check req.params)
  `);
}
