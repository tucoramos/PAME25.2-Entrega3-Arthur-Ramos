import ProductGrid from "../components/ProductGrid";
import HeadderPagProdutos from "../components/HeadderPagProdutos";

export default function page() {
  // Renderiza a página de produtos favoritos
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
