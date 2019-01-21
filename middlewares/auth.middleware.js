const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
    next() 
  } else {
    res.status(401)
    .redirect('/sessions/create')
  }
  next(); //quiza no haga falta
}

module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && (req.user.role === role)) {
  next()
  } else {
  next( createError (403, 'INSUFFICIENT PRIVILEGES'))
}
  }
}