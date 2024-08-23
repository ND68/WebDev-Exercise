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
  const [statusFilters, setStatusFilters] = useState(["😃", "😐", "😢"]);
  const [sortBy, setSortBy] = useState("name");
  const [currPage, setCurrPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [totalEntries, setTotalEntries] = useState(0);

  async function fetchCapybaras() {
    let data = await getAll();
    setCapybaras(data);
    setTotalEntries(data.length)
  }

  async function updateCapybaras() {
    let data = await getSortedFilter(sortBy, foodFilters, statusFilters, 
        entriesPerPage * (currPage - 1), entriesPerPage
    );
    setCapybaras(data);
    setTotalEntries(data.length)
  }

  useEffect(()=>{
    fetchCapybaras();
  }, [])

  useEffect(()=>{
    setCurrPage(1);
    updateCapybaras();
  }, [sortBy, foodFilters, statusFilters, entriesPerPage])

  useEffect(()=>{
    updateCapybaras();
  }, [sortBy, foodFilters, currPage, statusFilters, entriesPerPage])

  

  function addFood(foodToAdd) {
    let newFoodFilters = [...foodFilters];
    newFoodFilters.push(foodToAdd);
    setFoodFilters(newFoodFilters);
  }
  
  function removeFood(foodToRemove) {
    setFoodFilters(foodFilters.filter(food => food !== foodToRemove))
  }

  function addStatus(statusToAdd) {
    let newStatusFilters = [...statusFilters];
    newStatusFilters.push(statusToAdd);
    setStatusFilters(newStatusFilters);
  }
  
  function removeStatus(statusToRemove) {
    setStatusFilters(statusFilters.filter(status => status !== statusToRemove))
  }

  return (
    <main className="w-full h-full">
      <HeaderNav currentPage="capybaras"/>
      <div className="flex justify-between bg-green-200">
        <div className="w-[65%] bg-yellow-300">
          <table className="w-[100%]">
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
        </div>
        <div className="w-[25%] h-[50%] border-black border-2 rounded-[30px] flex flex-col p-[2%] justify-around">
          <div className="text-2xl self-center font-extralight">Sort</div>

          <div className="flex justify-around">
            <button className="border-black border-2 rounded-lg p-[3%] flex justify-center" 
            style={{opacity: sortBy == 'name' ? '100%' : '30%'}} onClick={() => setSortBy("name")}>By Name</button>

            <button className="border-black border-2 rounded-lg p-[3%] flex justify-center" 
            style={{opacity: sortBy == 'age' ? '100%' : '30%'}} onClick={() => setSortBy("age")}>By Age</button>
          </div>
        
          <div className="text-2xl self-center font-extralight">Filter</div>
          <div className="flex justify-between">

            <input type="checkbox" id="brocolli" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🥦") ? removeFood("🥦") : addFood("🥦")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="brocolli">🥦</label>

            <input type="checkbox" id="melon" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🍈") ? removeFood("🍈") : addFood("🍈")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="melon">🍈</label>
        
            <input type="checkbox" id="yam" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🍠") ? removeFood("🍠") : addFood("🍠")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="yam">🍠</label>

            <input type="checkbox" id="carrot" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🥕") ? removeFood("🥕") : addFood("🥕")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="carrot">🥕</label>

            <input type="checkbox" id="lettuce" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🥬") ? removeFood("🥬") : addFood("🥬")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="lettuce">🥬</label>

            <input type="checkbox" id="corn" className="appearance-none check-with-label" 
            onClick={() => foodFilters.includes("🌽") ? removeFood("🌽") : addFood("🌽")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] flex justify-center label-for-check" 
            htmlFor="corn">🌽</label>

          </div>

          <div className="flex justify-center">

            <input type="checkbox" id="happy" className="appearance-none check-with-label" 
            onClick={() => statusFilters.includes("😃") ? removeStatus("😃") : addStatus("😃")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] m-[2%] flex justify-center label-for-check" 
            htmlFor="happy">😃</label>

            <input type="checkbox" id="neutral" className="appearance-none check-with-label" 
            onClick={() => statusFilters.includes("😐") ? removeStatus("😐") : addStatus("😐")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] m-[2%] flex justify-center label-for-check" 
            htmlFor="neutral">😐</label>

            <input type="checkbox" id="sad" className="appearance-none check-with-label" 
            onClick={() => statusFilters.includes("😢") ? removeStatus("😢") : addStatus("😢")}></input>
            <label className="border-black border-2 rounded-lg p-[3%] w-[15%] m-[2%] flex justify-center label-for-check" 
            htmlFor="sad">😢</label>

          </div>

        </div>
      </div>

      <div>
        <select onChange={(entries) =>setEntriesPerPage(parseInt(entries.target.value))}>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <div>
        {totalEntries < entriesPerPage && totalEntries !== 0 ? 
        <div className="font-extrabold text-xl">{currPage}</div> :
        currPage <= 1 ? 
        <div>
          <button disabled={true} className="opacity-0" onClick={(() => setCurrPage(currPage - 1))}>←</button>
          <div className="font-extrabold text-xl">{currPage}</div>
          <button onClick={(() => setCurrPage(currPage + 1))}>→</button> 
        </div> 
          : currPage >= Math.ceil(totalEntries/entriesPerPage) ? 
        <div>
          <button onClick={(() => setCurrPage(currPage - 1))}>←</button>
          <div className="font-extrabold text-xl">{currPage}</div>
          <button disabled={true} className="opacity-0" onClick={(() => setCurrPage(currPage + 1))}>→</button>
        </div> :
        <div>
          <button onClick={(() => setCurrPage(currPage - 1))}>←</button>
          <div className="font-extrabold text-xl">{currPage}</div>
          <button onClick={(() => setCurrPage(currPage + 1))}>→</button>
        </div>
        }

        </div>
      </div>

      <div className="h-[10%]"></div>
    </main>
  );
}
