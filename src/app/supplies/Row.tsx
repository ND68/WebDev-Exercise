"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { orderMoreFood } from "@/server/db/actions/food";

export default function Row({ food }) {
  const [loading, setLoading] = useState(false);
  const [_, startTransition] = useTransition();
  const router = useRouter();

  const handleClickOrderMore = async () => {
    setLoading(true);

    await orderMoreFood(food, 5);

    setLoading(false);
    startTransition(router.refresh);
  };

  const buttonText = loading ? "Ordering..." : "Order More";

  return (
    <tr>
      <td>{food.name}</td>
      <td>{food.count}</td>
      <td>
        <button className="font-bold underline" onClick={handleClickOrderMore}>{buttonText}</button>
      </td>
    </tr>
  );
}
