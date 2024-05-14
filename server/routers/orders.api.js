const express = require("express");
const router = express.Router();
const Order = require("../models/orders.mongoose");
const Register = require("../models/register.mongoose");

router.post("/orders", async (req, res) => {
	const { userId, products } = req.body;

	try {
		const user = await Register.findById(userId);

		const newOrder = new Order({
			user: user,
			products: products.map((product) => ({
				productId: product._id,
				quantity: product.count,
				title: product.title,
				image: product.image,
				price: product.price,
				article: product.article,
				developer: product.developer,
				description: product.description,
				genre: product.genre,
				language: product.language,
				the_plot: product.the_plot,
				data: product.data,
				platforms: product.platforms,
				category: product.category,
			})),
			orderDate: new Date(),
		});

		const savedOrder = await newOrder.save();

		user.orders.push(savedOrder);
		await user.save();

		res.json({ success: true, order: savedOrder, updatedUser: user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Помилка сервера" });
	}
});

router.get("/orders", async (request, response) => {
	const ordersAll = await Order.find();
	response.status(200).json({
		success: true,
		data: ordersAll,
	});
});

module.exports = router;
