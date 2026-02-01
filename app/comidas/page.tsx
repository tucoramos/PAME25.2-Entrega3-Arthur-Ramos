// Pagina de comidas
import ProductGrid from "../components/ProductGrid";
import HeadderPagProdutos from "../components/HeadderPagProdutos";

export default function page() {
  // Renderiza a página de comidas
  return (
    <div className="w-full h-full">
      <HeadderPagProdutos
        title="Nossas Comidas"
        placeholder="Buscar comida..."
      />
      <ProductGrid type="comidas" onlyLiked={false} />
    </div>
  );
}
