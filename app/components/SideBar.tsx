"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const ICON_CLASS = "h-6 w-6 stroke-[1.8]";

function IconHome() {
  return (
    <svg
      className={ICON_CLASS}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(176,138,61,1)"
    >
      <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path>
    </svg>
  );
}

function IconFood() {
  return (
    <svg
      className={ICON_CLASS}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(176,138,61,1)"
    >
      <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path>
    </svg>
  );
}

function IconCoffee() {
  return (
    <svg
      className={ICON_CLASS}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(176,138,61,1)"
    >
      <path d="M16 13V5H6V13C6 14.1046 6.89543 15 8 15H14C15.1046 15 16 14.1046 16 13ZM5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"></path>
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      className={ICON_CLASS}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(176,138,61,1)"
    >
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    { label: "Home", href: "/", icon: <IconHome /> },
    { label: "Comidas", href: "/comidas", icon: <IconFood /> },
    { label: "Bebidas", href: "/bebidas", icon: <IconCoffee /> },
    { label: "Favoritos", href: "/favoritos", icon: <IconHeart /> },
  ];

  return (
    <aside className=" border-r-2 border-[#ece6da] w-[15%] bg-[#f7f6f3]">
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
