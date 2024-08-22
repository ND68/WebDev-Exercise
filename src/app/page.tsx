"use client";

import { getAll, getSortedByAge, getSortedByName } from "@/server/db/actions/capybara";
import HeaderNav from "./HeaderNav";
import React, { useEffect } from "react";
import { useState } from "react";

function Row({ capybara }) {
  return (
    <tr>
      <td>{capybara.name}</td>
      <td>{capybara.age}</td>
      <td>{capybara.status}</td>
      <td>{capybara.favoriteFood}</td>
    </tr>
  );
}

export default function Home() {
  const [capybaras, setCapybaras] = useState(null);

  async function fetchCapybaras() {
    let data = await getAll();
    setCapybaras(data);
  }

  async function sortByAge() {
    let data = await getSortedByAge();
    setCapybaras(data);
  }

  async function sortByName() {
    let data = await getSortedByName();
    setCapybaras(data);
  }

  useEffect(()=>{
    fetchCapybaras();
  }, [])

  

  return (
    <main className="w-screen h-full">
      <HeaderNav currentPage="capybaras"/>
      <table id="myTable" className="w-[65%]">
        <thead>
          <tr className="bg-slate-200 font-bold">
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
            <td>Favorite Food</td>
          </tr>
        </thead>
        <tbody className="">
          {capybaras == null ? <tr></tr> : 
            capybaras.map((capybara) => (
            <Row capybara={capybara} />
          ))}
        </tbody>
      </table>
      <button onClick={sortByAge}>Sort By Age</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByAge}>Sort By Age</button>
      <button onClick={sortByName}>Sort By Name</button>
      <div className="h-[10%]"></div>
    </main>
  );
}
