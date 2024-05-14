const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("../models/register.mongoose");
const generateSecretKey = require("../configs/generateSecretKey");

// Отримання всіх користувачів
router.get("/customers", async (request, response) => {
	const customersAll = await Register.find();
	response.status(200).json({
		success: true,
		data: customersAll,
	});
});

// Реєстрація нового користувача
router.post("/customers", async (req, res) => {
	const { firstName, lastName, login, email, password, region, isAdmin } =
		req.body;

	try {
		const existingLogin = await Register.findOne({ login });
		if (existingLogin) {
			return res
				.status(400)
				.json({ message: "Користувач з таким логіном вже існує" });
		}

		const existingEmail = await Register.findOne({ email });
		if (existingEmail) {
			return res
				.status(400)
				.json({ message: "Користувач з таким email вже існує" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newCustomer = new Register({
			firstName,
			lastName,
			login,
			email,
			password: hashedPassword,
			region,
			isAdmin,
			orders: [],
			created_at: new Date(),
		});

		const savedCustomer = await newCustomer.save();

		const secretKey = generateSecretKey();
		const token = jwt.sign(
			{ _id: savedCustomer._id, isAdmin: savedCustomer.isAdmin },
			secretKey,
			{}
		);
		res.json({
			token,
			customerId: savedCustomer._id,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Помилка сервера" });
	}
});

// Оновлення інформації про користувача
router.put("/customers/:customerId", async (req, res) => {
	const customerId = req.params.customerId;
	const { orders, ...updatedData } = req.body;

	try {
		const updatedUser = await Register.findByIdAndUpdate(
			customerId,
			{ $set: updatedData },
			{ new: true }
		);

		if (orders) {
			updatedUser.orders.push(...orders);
		}

		await updatedUser.save();

		res.json({ success: true, updatedUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Помилка сервера" });
	}
});

// Отримання конкретного користувача за його айді
router.get("/customer/:customerId", async (req, res) => {
	const customerId = req.params.customerId;

	try {
		const user = await Register.findById(customerId);

		if (!user) {
			return res.status(404).json({ message: "Користувача не знайдено" });
		}

		res.json({ success: true, user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Помилка сервера" });
	}
});

module.exports = router;
