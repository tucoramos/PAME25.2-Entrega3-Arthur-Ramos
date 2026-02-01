import ProductPage from "@/app/components/ProductPage";
import { readDb } from "@/lib/jsonDb";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ idProduto: string }>;
}) {
  const { idProduto } = await props.params;
  const db = await readDb();
  const allProducts = [...db.comidas, ...db.bebidas];
  const product = allProducts.find((item) => item.id === idProduto);
  if (!product) {
    notFound(); // 404 se não existir
  }
  return <ProductPage product={product} />;
}
