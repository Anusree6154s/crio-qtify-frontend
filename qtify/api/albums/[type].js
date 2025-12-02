import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "db.json");
  const db = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const { type } = req.query; // auto filled from [type]

  if (!type || !db.albums[type]) {
    return res.status(400).json({ error: "Invalid type" });
  }

  return res.status(200).json(db.albums[type]);
}
