import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  price: number;
  imageSrc: string;
  href: string;
};

function formatPriceRS(value: number) {
  // R$ 2.00
  return `R$ ${value.toFixed(2)}`;
}

export default function ProductCard({
  title,
  price,
  imageSrc,
  href,
}: ProductCardProps) {
  return (
    <article className="w-full h-70 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <Link href={href}>
        <div className="flex items-stretch">
          {/* imagem */}
          <div className="relative h-35 w-[40%] shrink-0 bg-gray-100">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="240px"
              priority={false}
            />
          </div>

          {/* texto */}
          <div className="flex flex-1 flex-col justify-center px-6">
            <h3 className="text-[22px] font-semibold leading-tight text-gray-900">
              {title}
            </h3>
            <p className="text-[16px] text-gray-600">{formatPriceRS(price)}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
