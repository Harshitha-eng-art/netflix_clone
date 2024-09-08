import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
//zaZ44ZvkkQonC2id
//mongodb+srv://harshithatu302003:<db_password>@cluster0.ch9ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0