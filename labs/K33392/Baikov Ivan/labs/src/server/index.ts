import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { JSONFilePreset } from "lowdb/node";
import axios from "axios";

function start() {
  try {
    const app = express();
    const PORT = 3123;

    app.use(cors());
    app.use(bodyParser.json());

    const db = "http://localhost:3000";

    app.get("/posts", async (req: Request, res: Response) => {
      try {
        const response = await axios.get(`${db}/posts`);
        const posts = response.data;
        const sortMethod = req.query.sort;

        let sortedPosts;

        if (sortMethod === "sort_by_date") {
          sortedPosts = posts.sort(
            (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        } else if (sortMethod === "sort_by_name") {
          sortedPosts = posts.sort((a: any, b: any) => a.title.localeCompare(b.title));
        } else {
          sortedPosts = posts;
        }

        console.log(sortMethod);
        res.json(sortedPosts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.get("/posts/:id", async (req: Request, res: Response) => {
      try {
        const response = await axios.get(`${db}/posts/${req.params.id}`);
        const post = response.data;
        res.json(post);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/posts", async (req: Request, res: Response) => {
      const { title, description, date, cover } = req.body;

      if (!title || !description || !date || !cover) {
        return res.status(400).json({ error: "Title and content are required" });
      }
      const response = await axios.post(`${db}/posts`, { title, description, date, cover });
      res.json(response.data);
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
