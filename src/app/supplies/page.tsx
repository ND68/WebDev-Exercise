import { getAll } from "@/server/db/actions/food";
import Link from "next/link";
import Row from "./Row";
import LowCountButton from "./LowCountButton"
import HeaderNav from "../HeaderNav";

export default async function Supplies() {
  const food = await getAll();

  return (
    <main className="w-screen h-full">
      <HeaderNav currentPage="supplies"/>

      <table  className="w-[65%]">
        <thead>
          <tr className="bg-slate-200 font-bold">
            <td>Name</td>
            <td>Count</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {food.map((food) => (
            <Row food={food} />
          ))}
        </tbody>
      </table>
      <LowCountButton/>
    </main>
  );
}
