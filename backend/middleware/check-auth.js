// Check whether we are authenticated or not.
// First check if there is a token attached to the request
// Second, validate the token

//A middle is just a function that receives our 3 well known arguments (req, res, next)

const jwt = require("jsonwebtoken");


//Runs before the final function (in routes/posts.js/router.post)
module.exports = (req, res, next) => {
  try {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  req.userData = { email: decodedToken.email, userId: decodedToken.userId };
  next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
