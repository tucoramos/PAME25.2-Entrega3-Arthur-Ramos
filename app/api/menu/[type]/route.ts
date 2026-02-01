// API Route para listar ou criar/atualizar itens do menu
import { readDb, writeDb, MenuItem } from "@/lib/jsonDb";

// Valida o Tipo de Menu
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
  // Extrai o tipo de menu dos parâmetros da rota
  const type = params.type;
  if (!isMenuType(type)) return new Response("Invalid type", { status: 400 });

  // Lê o banco de dados
  const db = await readDb();

  // Retorna a lista correspondente ao tipo solicitado
  return Response.json(db[type]);
}

// POST /api/menu/comidas  (cria ou atualiza item)
// body: { item: {id,title,price,imageSrc,liked} }
export async function POST(
  req: Request,
  { params }: { params: { type: string } },
) {
  // Extrai o tipo de menu dos parâmetros da rota
  const type = params.type;
  if (!isMenuType(type)) return new Response("Invalid type", { status: 400 });

  // Extrai o item do corpo da requisição
  const body = (await req.json()) as { item?: MenuItem };
  if (!body.item?.id) return new Response("Missing item", { status: 400 });

  // Lê o banco de dados
  const db = await readDb();

  // Atualiza ou adiciona o item na lista correspondente
  const list = db[type];
  const idx = list.findIndex((x) => x.id === body.item!.id);

  // Cria a nova lista com o item atualizado ou adicionado
  const nextList =
    idx >= 0
      ? list.map((x) => (x.id === body.item!.id ? body.item! : x))
      : [...list, body.item!];

  // Atualiza o banco de dados
  const nextDb = { ...db, [type]: nextList };
  await writeDb(nextDb);

  // Retorna a nova lista
  return Response.json(nextList);
}
