"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function SortAndFilter(props) {
    const {age, name, status, food} = props
    console.log(age, name, status, food)

    const handleSortByAge = async () => {

    };


    return (
        <button className="border-2 rounded-xl border-black mt-[1%] p-[.5%] font-bold underline" onClick={handleSortByAge}>Sort By Age</button>
    );
}
