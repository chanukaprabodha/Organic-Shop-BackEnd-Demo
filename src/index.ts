import app from "./app";
import dotenv from "dotenv";

// 1.Load environment variables from .env file
dotenv.config();

// 2.Access the PORT from environment variables
const port = process.env.PORT || 3000;

// 3.Instruct the app to listen on port 3000
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});