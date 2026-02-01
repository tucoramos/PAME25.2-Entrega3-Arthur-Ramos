"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icons from "./Icons";

const { Home, Food, Coffe, EmptyHeart } = Icons();

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    { label: "Home", href: "/", icon: <Home /> },
    { label: "Comidas", href: "/comidas", icon: <Food /> },
    { label: "Bebidas", href: "/bebidas", icon: <Coffe /> },
    { label: "Favoritos", href: "/favoritos", icon: <EmptyHeart /> },
  ];

  return (
    <aside>
      <div className="px-0 py-0 flex justify-center">
        <Image
          src="/logo.png"
          alt="CleanGirl Cafe"
          width={300}
          height={30}
          priority
        />
      </div>
      <nav className="py-4">
        <ul className="flex flex-col">
          {items.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={[
                    "flex items-center gap-4 px-6 py-4",
                    "text-[20px] leading-none",
                    "transition-colors",
                    isActive ? "bg-[#e7e4d6]" : "hover:bg-black-50",
                  ].join(" ")}
                >
                  <span className="text-[#b08a3d]">{item.icon}</span>
                  <span className="text-[#464239]">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
