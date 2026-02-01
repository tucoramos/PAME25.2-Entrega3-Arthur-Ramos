import ProductGrid from "../components/ProductGrid";
import HeadderPagProdutos from "../components/HeadderPagProdutos";

export default function page() {
  return (
    <div className="w-full h-full">
      <HeadderPagProdutos
        title="Nossos Produtos Favoritos"
        placeholder="Buscar produto favorito..."
      />
      <ProductGrid type="both" onlyLiked={true} />
    </div>
  );
}
