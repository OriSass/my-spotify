const { Router } = require('express');
const router = Router();
const { User } = require('./models');
const jwt = require('jsonwebtoken');

router.post('/', async(request, response) => {
    const { username, password } = request.body;
    console.log(request);
    const user = await User.findOne({
        where: {name: username, password}
    });
    if(!user) return response.status(404).json();
    const token = jwt.sign({name: username}, process.env.JWT_SECRET, { expiresIn:"24h" });
    response.json(token);
});

module.exports = router;
