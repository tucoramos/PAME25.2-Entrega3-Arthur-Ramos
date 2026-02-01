"use client";
import React from "react";
import SearchBar from "./SearchBar";

type Props = {
  title: string;
  placeholder: string;
};

export default function HeadderPagProdutos({ title, placeholder }: Props) {
  const [Busca, SetBusca] = React.useState("");
  return (
    <header className="w-full bg-[#fbf7ef] px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-[34px] font-semibold text-[#2b241d]">{title}</h1>

        <SearchBar
          value={Busca}
          onChange={SetBusca}
          placeholder={placeholder}
        />
      </div>
    </header>
  );
}
