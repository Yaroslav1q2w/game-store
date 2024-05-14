const { Router } = require("express");
const router = Router();
const Product = require("../models/product.mongoose");

// Отримуємо всі продукти

router.get("/allProducts", async (request, response) => {
	const productsAll = await Product.find();
	response.status(200).json({
		success: true,
		data: productsAll,
	});
});

// Отримуємо всі продукти по сторінкам та категоріям

router.get("/products", async (request, response) => {
	const { category, search, _limit = 9, _page = 1 } = request.query;

	const query = {};
	if (category) {
		query.category = category;
	}
	if (search) {
		query.title = { $regex: search, $options: "i" };
	}

	try {
		const limit = parseInt(_limit);
		const page = parseInt(_page);
		const skip = (page - 1) * limit;

		const [products, total] = await Promise.all([
			Product.find(query).skip(skip).limit(limit),
			Product.countDocuments(query),
		]);

		response.status(200).json({
			success: true,
			data: products,
			totalPages: Math.ceil(total / limit),
		});
	} catch (error) {
		response.status(500).json({ success: false, error: error.message });
	}
});

// Отримуємо один продукт

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

// Створюємо новий продукт

router.post("/products", async (request, response) => {
	try {
		const newProductData = request.body;
		const newProduct = new Product(newProductData);
		const savedProduct = await newProduct.save();

		response.status(201).json({
			success: true,
			data: savedProduct,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			error: error.message,
		});
	}
});

module.exports = router;
