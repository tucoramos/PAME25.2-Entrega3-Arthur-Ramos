"use client";
import { useState } from "react";
import Icons from "./Icons";

const { EmptyHeart, FullHeart } = Icons();

type Props = {
  id: string;
  type: "bebidas" | "comidas";
  liked: boolean;
};

export default function BotaoFavorito({ id, type, liked }: Props) {
  const [Liked, setLiked] = useState(liked);

  async function toggleLike() {
    // optimistic update
    setLiked((prev) => !prev);

    await fetch(`/api/menu/${type}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }
  return (
    <button
      type="button"
      onClick={toggleLike}
      className="
                inline-flex w-full max-w-130 items-center justify-center gap-2
                rounded-xl border border-[#b08a3d] bg-transparent
                px-5 py-3 text-[15px] font-semibold text-[#2b241d]
                transition hover:bg-[#b08a3d]/10
                focus:outline-none focus:ring-2 focus:ring-[#b08a3d]/25
              "
    >
      <button
        type="button"
        onClick={toggleLike}
        className={"rounded-full p-2 transition"}
      >
        {Liked ? <FullHeart /> : <EmptyHeart />}
      </button>
      Favoritar
    </button>
  );
}
