import { readDb, writeDb } from "@/lib/jsonDb";

type MenuType = "comidas" | "bebidas";
function isMenuType(x: string): x is MenuType {
  return x === "comidas" || x === "bebidas";
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ type: string }> },
) {
  const { type } = await ctx.params; // ✅ AQUI

  if (!isMenuType(type)) {
    return new Response("Invalid type", { status: 400 });
  }

  const { id } = (await req.json()) as { id?: string };
  if (!id) return new Response("Missing id", { status: 400 });

  const db = await readDb();

  const nextList = db[type].map((item) =>
    item.id === id ? { ...item, liked: !item.liked } : item,
  );

  await writeDb({ ...db, [type]: nextList });

  return Response.json(nextList);
}
