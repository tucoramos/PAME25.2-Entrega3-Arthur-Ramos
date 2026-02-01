"use client";
import { useState } from "react";
import Icons from "./Icons";

const { EmptyHeart, FullHeart } = Icons();

type Props = {
  id: string;
  type: "bebidas" | "comidas";
  initialLiked: boolean;
};

export default function Heart({ id, type, initialLiked }: Props) {
  const [liked, setLiked] = useState(initialLiked);

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
      className={"rounded-full p-2 transition"}
    >
      {liked ? <FullHeart /> : <EmptyHeart />}
    </button>
  );
}
