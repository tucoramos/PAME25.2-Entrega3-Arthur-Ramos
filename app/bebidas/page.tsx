import HeadderPagProdutos from "../components/HeadderPagProdutos";
import ProductGrid from "../components/ProductGrid";

export default function page() {
  return (
    <div className="w-full h-full">
      <HeadderPagProdutos
        title="Nossas Bebidas"
        placeholder="Buscar bebida..."
      />
      <ProductGrid type="bebidas" onlyLiked={false} />
    </div>
  );
}
