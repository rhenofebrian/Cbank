import dotenv from "dotenv";
import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middleware Proxy untuk mengambil data dari NewsAPI
app.get("/api/news", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(process.env.BASE_URL as string, {
      params: {
        q: process.env.QUERY,
        apiKey: process.env.API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json({ message: "Error fetching news data" });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
