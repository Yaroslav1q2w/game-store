const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const apiRouter = require("./routers/products.api");
const apiOrders = require("./routers/orders.api");
const apiRegister = require("./routers/register.api");
const apiAuth = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4444;

const MONGO_URL =
	"mongodb+srv://admin:admin@cluster0.vqljl7l.mongodb.net/node-blog?retryWrites=true&w=majority";

app.use("/api", apiRouter);
app.use("/api", apiOrders);
app.use("/api", apiRegister);
app.use("/api", apiAuth);

app.all("*", (request, response) => {
	response.status(404).send("resource not found");
});

const start = async () => {
	try {
		mongoose
			.connect(MONGO_URL, {
				useNewUrlParser: true,
			})
			.then(() => {
				console.log("DB OK");
			})
			.catch((err) => console.log("DB error", err));

		app.listen(PORT, () => {
			console.log(`Server is running on :${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
