const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = require("../models/register.mongoose");

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await Register.findOne({ email });

		if (!user) {
			return res
				.status(404)
				.json({ message: "Користувач з вказаним email не знайдений" });
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			return res.status(401).json({ message: "Неправильний пароль" });
		}

		const payload = {
			_id: user._id,
			firstName: user.firstName,
			login: user.login,
			lastName: user.lastName,
			isAdmin: user.isAdmin,
			email: user.email,
			address: user.address,
			user: {
				selectedProducts: user.selectedProducts,
				shoppingCart: user.shoppingCart,
			},
		};

		const token = jwt.sign(payload, "secretKey", {
			expiresIn: 36000,
		});

		res.json({
			success: true,
			token: token,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Помилка сервера" });
	}
});

module.exports = router;
