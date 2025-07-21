const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;
