import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(__dirname, "data", "db.json");
  const db = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return res.status(200).json(db.genres);
}
