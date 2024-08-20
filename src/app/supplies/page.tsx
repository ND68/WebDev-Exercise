import { getAll } from "@/server/db/actions/food";
import Link from "next/link";
import Row from "./Row";
import LowCountButton from "./LowCountButton"

export default async function Supplies() {
  const food = await getAll();

  return (
    <main>
      <h1>Supplies</h1>
      <Link href="/">Back</Link>

      <table id="foodTable">
        <thead>
          <tr>
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
