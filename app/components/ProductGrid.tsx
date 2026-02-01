import Image from "next/image";
import Heart from "./Heart";
import Link from "next/link";
import { readDb } from "@/lib/jsonDb";

interface Props {
  type: "comidas" | "bebidas" | "both";
  onlyLiked: boolean;
}

function formatPriceRS(value: number) {
  // R$2.00
  return `R$ ${value.toFixed(2)}`;
}

export default async function ProductGrid({ type, onlyLiked }: Props) {
  const db = await readDb();
  let products = db.comidas;
  if (type === "bebidas") {
    products = db.bebidas;
  } else if (type === "both") {
    products = [...db.comidas, ...db.bebidas];
  }
  if (onlyLiked) {
    products = products.filter((p) => p.liked);
  }
  return (
    <section className="w-full h-full bg-[#f7f6f3] p-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-[#e7dfd3] bg-white p-4 shadow-sm"
            >
              <Link href={`/product/${p.id}`}>
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="object-cover"
                    priority={p.id === "1"}
                  />
                </div>
              </Link>
              <div className="mt-4 flex items-end justify-between gap-4">
                <Link href={`/product/${p.id}`}>
                  <div>
                    <h3 className="text-[26px] font-semibold leading-tight text-[#2b241d]">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[20px] font-semibold text-[#b08a3d]">
                      {formatPriceRS(p.price)}
                    </p>
                  </div>
                </Link>

                <Heart id={p.id} type={p.type} initialLiked={p.liked} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
