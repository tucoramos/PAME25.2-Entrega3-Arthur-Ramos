import { readDb, writeDb, MenuItem } from "@/lib/jsonDb";

type MenuType = "comidas" | "bebidas";

function isMenuType(x: string): x is MenuType {
  return x === "comidas" || x === "bebidas";
}

// GET /api/menu/comidas  -> lista comidas
// GET /api/menu/bebidas  -> lista bebidas
export async function GET(
  _req: Request,
  { params }: { params: { type: string } },
) {
  const type = params.type;
  if (!isMenuType(type)) return new Response("Invalid type", { status: 400 });

  const db = await readDb();
  return Response.json(db[type]);
}

// POST /api/menu/comidas  (cria ou atualiza item)
// body: { item: {id,title,price,imageSrc,liked} }
export async function POST(
  req: Request,
  { params }: { params: { type: string } },
) {
  const type = params.type;
  if (!isMenuType(type)) return new Response("Invalid type", { status: 400 });

  const body = (await req.json()) as { item?: MenuItem };
  if (!body.item?.id) return new Response("Missing item", { status: 400 });

  const db = await readDb();

  const list = db[type];
  const idx = list.findIndex((x) => x.id === body.item!.id);

  const nextList =
    idx >= 0
      ? list.map((x) => (x.id === body.item!.id ? body.item! : x))
      : [...list, body.item!];

  const nextDb = { ...db, [type]: nextList };
  await writeDb(nextDb);

  return Response.json(nextList);
}
