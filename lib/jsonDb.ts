import { promises as fs } from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "db.json");

export type MenuItem = {
  id: string; // "B-04"
  title: string; // "Cappuccino Artesanal"
  price: number; // 2.0
  imageSrc: string; // "/menuBebidas/..."
  liked: boolean; // true/false
  type: "comidas" | "bebidas";
  descricao: string; // "cappuccino com..."
  tags: string[];
};

export type Db = {
  comidas: MenuItem[];
  bebidas: MenuItem[];
};

export async function readDb(): Promise<Db> {
  const raw = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(raw) as Db;
}

export async function writeDb(db: Db) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf8");
}
