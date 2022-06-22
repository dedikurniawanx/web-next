import fs from "fs";
import path from "path";
export default function handler(req, res) {
  const lokasi = path.join(__dirname + "../../../../../database");
  const website = fs.readFileSync(`${lokasi}/website.json`, {
    encoding: "utf-8",
  });
  res.status(200).json({ website: JSON.parse(website) });
}
