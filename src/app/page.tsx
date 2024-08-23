"use client";

import { getAll, getSortedFilter } from "@/server/db/actions/capybara";
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
  const [foodFilters, setFoodFilters] = useState(["🥦", "🍈", "🍠", "🥕", "🥬", "🌽"]);
  const [statusFilters, setStatusFilters] = useState([])
  const [sortBy, setSortBy] = useState("name")


  async function fetchCapybaras() {
    let data = await getAll();
    setCapybaras(data);
  }

  async function sortByAge(foodFilters, statusFilters) {
    let data = await getSortedFilter( sortBy, foodFilters, statusFilters);
    setCapybaras(data);
  }

  useEffect(()=>{
    fetchCapybaras();
  }, [])

  useEffect(()=>{
    console.log(foodFilters);
  }, [foodFilters])

  function addFood(foodToAdd) {
    let newFoodFilters = [...foodFilters];
    newFoodFilters.push(foodToAdd);
    setFoodFilters(newFoodFilters);
  }
  
  function removeFood(foodToRemove) {
    setFoodFilters(foodFilters.filter(food => food !== foodToRemove))
  }

  return (
    <main className="w-full h-full">
      <HeaderNav currentPage="capybaras"/>
      <div className="flex justify-between">
        <table id="myTable" className="w-[65%]">
          <thead>
            <tr className="bg-slate-200 font-bold">
              <td>Name</td>
              <td>Age</td>
              <td>Status</td>
              <td>Favorite Food</td>
            </tr>
          </thead>
          <tbody>
            {capybaras == null ? <tr></tr> : 
              capybaras.map((capybara) => (
              <Row capybara={capybara} />
            ))}
          </tbody>
        </table>
        
        <div className="w-[25%] border-black border-2 rounded-[30px] flex flex-col p-[2%]">
         <button onClick={() => sortByAge(foodFilters, statusFilters)}>Sort By Age</button>
         <button className="border-2 border-black rounded-xl" style={{backgroundColor: foodFilters.includes("🥦") ? 'green' : 'red'}} 
         onClick={() => foodFilters.includes("🥦") ? removeFood("🥦") : addFood("🥦")}>🥦</button>
        </div>
      </div>
      <div className="h-[10%]"></div>
    </main>
  );
}
