import Image from "next/image";
import BotaoFavorito from "./BotaoFavorito";
import Icons from "./Icons";

const { Leaf: LeafIcon, Vegan: VeganIcon, Milk: MilkIcon } = Icons();
type Props = {
  tit?: string;
  product: {
    id: string;
    title: string;
    price: number;
    imageSrc: string;
    liked: boolean;
    type: "bebidas" | "comidas";
    descricao: string;
    tags: string[];
  };
};

function formatPriceRS(value: number) {
  // R$ 2.00
  return `R$ ${value.toFixed(2)}`;
}

export default function ProductPage({
  tit = "Item Details",
  product: { id, title, price, imageSrc, liked, type, descricao, tags },
}: Props) {
  return (
    <section className="w-full h-full bg-[#f7f6f3]z px-8 py-6">
      {/* topo */}
      <h1 className="text-[36px] font-semibold text-[#2b241d]">{tit}</h1>

      {/* layout principal */}
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr]">
        {/* esquerda: imagem */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority
          />
        </div>

        {/* direita: infos */}
        <div className="flex flex-col">
          <h2 className="text-[44px] font-semibold leading-tight text-[#2b241d]">
            {title}
          </h2>

          <p className="mt-2 text-[28px] font-semibold text-[#b08a3d]">
            {formatPriceRS(price)}
          </p>

          <div className="mt-5 h-px w-full bg-[#e7dfd3]" />

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#2b241d]/80">
            {descricao}
          </p>

          {/* badge */}
          <div className="mt-5 gap-3 flex flex-wrap">
            {tags.includes("Vegano") && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#efe7db] px-3 py-1 text-[13px] text-[#2b241d]">
                <VeganIcon /> {"vegano"}
              </span>
            )}
            {tags.includes("Sem lactose") && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#efe7db] px-3 py-1 text-[13px] text-[#2b241d]">
                <MilkIcon /> {"sem lactose"}
              </span>
            )}
            {tags.includes("Sem gluten") && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#efe7db] px-3 py-1 text-[13px] text-[#2b241d]">
                <LeafIcon /> {"sem glúten"}
              </span>
            )}
          </div>

          {/* botão */}
          <div className="mt-5">
            <BotaoFavorito id={id} type={type} liked={liked} />
          </div>
        </div>
      </div>
    </section>
  );
}
// fazer um botão de favoritar que muda o estado do coração
// concertar o Id do heart
