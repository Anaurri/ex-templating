
module.exports.home = (req, res, next) => {
  // Iteration 1: render home view
  res.render('common/home');
  //no hace falta poner return(next) porque el render es una función q finaliza ya
}

