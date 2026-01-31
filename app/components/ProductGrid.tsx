import Image from "next/image";
import Heart from "./Heart";

type Product = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  liked?: boolean;
};

interface Props {
  products: Product[];
  Clicado?: (id: string) => void;
}

function formatPriceUSD(value: number) {
  // igual ao print: $2.00
  return `$${value.toFixed(2)}`;
}

export default function ProductGrid({ products }: Props) {
  return (
    <section className="w-full h-full bg-[#f7f6f3] p-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-[#e7dfd3] bg-white p-4 shadow-sm"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                <Image
                  src={p.imageSrc}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={p.id === "1"}
                />
              </div>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-[26px] font-semibold leading-tight text-[#2b241d]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[20px] font-semibold text-[#b08a3d]">
                    {formatPriceUSD(p.price)}
                  </p>
                </div>

                <Heart id={p.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
