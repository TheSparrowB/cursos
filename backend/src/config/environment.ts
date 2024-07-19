import dotenv from "dotenv";
import path from "path";

// ENVIRONMENT VARIABLES
// if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "prod") {
// 	dotenv.config({ path: path.join(__dirname, "..", "environments", "environment.prod.env") });
// } else {
	dotenv.config({ path: path.join(__dirname, "..", "environments", "environment.env") });
//}
