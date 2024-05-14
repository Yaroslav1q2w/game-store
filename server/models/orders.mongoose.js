const { Schema, model, mongoose } = require("mongoose");

const orderSchema = new Schema({
	user: {
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "Register" },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		login: { type: String, required: true },
		email: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
		phone: { type: String },
		age: { type: Number },
		region: { type: String },
	},
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			quantity: { type: Number },
			title: { type: String },
			image: { type: String, required: true },
			price: { type: Number, required: true },
			article: { type: Number, required: true },
			developer: { type: String, required: true },
			description: { type: String, required: true },
			genre: { type: String, required: true },
			language: { type: String, required: true },
			count: { type: Number },
			the_plot: { type: String, required: true },
			data: { type: String, required: true },
			platforms: { type: String, required: true },
			category: { type: Number, required: true },
		},
	],
	orderDate: { type: Date, default: Date.now },
});

module.exports = model("Order", orderSchema);
