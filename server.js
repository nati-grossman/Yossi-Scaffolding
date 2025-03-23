import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./src/api/send-email.js";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Use the email router
app.use("/api", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
