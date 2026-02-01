// API Route para curtir/descurtir um item do menu
import { readDb, writeDb } from "@/lib/jsonDb";

// Valida o Tipo de Menu
type MenuType = "comidas" | "bebidas";
function isMenuType(x: string): x is MenuType {
  return x === "comidas" || x === "bebidas";
}

// POST /api/menu/comidas/like  (curte/descurte item)
// body: { id: string }
export async function POST(
  req: Request,
  ctx: { params: Promise<{ type: string }> },
) {
  // Extrai o tipo de menu dos parâmetros da rota
  const { type } = await ctx.params;

  if (!isMenuType(type)) {
    return new Response("Invalid type", { status: 400 });
  }

  // Extrai o ID do item do corpo da requisição
  const { id } = (await req.json()) as { id?: string };
  if (!id) return new Response("Missing id", { status: 400 });

  // Lê o banco de dados
  const db = await readDb();

  // Alterna o status de "liked" do item especificado
  const nextList = db[type].map((item) =>
    item.id === id ? { ...item, liked: !item.liked } : item,
  );

  // Atualiza o banco de dados
  await writeDb({ ...db, [type]: nextList });

  return Response.json(nextList);
}
