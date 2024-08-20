import { getAll } from "@/server/db/actions/food";
import Link from "next/link";
import Row from "./Row";
import { orderMoreFood } from "@/server/db/actions/food";

export default async function Supplies() {
  const food = await getAll();

  const orderAll = async () => {
    const table = document.getElementById("foodTable") as HTMLTableElement;
    for (let i = 0; i < table.rows.length;  i++) {
      if (table.rows[i] ) {

      }

    }
  };

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
      <button>Order all foods in low quantity (&lt;5)</button>
    </main>
  );
}
