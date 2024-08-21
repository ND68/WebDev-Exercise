"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { massOrder } from "@/server/db/actions/food";

export default function LowCountButton() {
  const [loading, setLoading] = useState(false);
  const [_, startTransition] = useTransition();
  const router = useRouter();

  const handleClickMassOrder = async () => {
    setLoading(true);

    await massOrder();

    setLoading(false);
    startTransition(router.refresh);
  };

  const buttonText = loading ? "Ordering..." : "Order all foods in low quantity (<5)";

  return (
    <button className="border-2 rounded-xl border-black mt-[1%] p-[.5%] font-bold underline" onClick={handleClickMassOrder}>{buttonText}</button>
  );
}
