import express  from "express";

import userRoutes from "./routes/user.routes.js";
import cvRoutes from "./routes/cv.routes.js"
import authRoutes from "./routes/auth.routes.js"
import adminRoutes from "./routes/admin.routes.js"

import connectDB from "./configs/mongo.js";
import {PORT} from "./configs/environments.js";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/user/resumes", cvRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
        console.log(`Server did not start on ${PORT}`)
		process.exit();
	}
}

startSever();