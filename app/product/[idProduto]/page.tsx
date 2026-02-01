import ProductPage from "@/app/components/ProductPage";
import { readDb } from "@/lib/jsonDb";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ idProduto: string }>;
}) {
  // Pega o idProduto dos parâmetros da rota
  const { idProduto } = await props.params;
  // Lê o banco de dados
  const db = await readDb();
  const allProducts = [...db.comidas, ...db.bebidas];

  // Encontra o produto pelo id
  const product = allProducts.find((item) => item.id === idProduto);

  // Se não encontrar, retorna 404
  if (!product) {
    notFound(); // 404 se não existir
  }

  // Renderiza a página do produto
  return <ProductPage product={product} />;
}
