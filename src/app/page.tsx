import { getAll } from "@/server/db/actions/capybara";
import Link from "next/link";

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

export default async function Home() {
  const capybaras = await getAll();

  return (
    <main>
      <h1>Capybaras</h1>
      <Link href="/">Back</Link>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
            <td>Favorite Food</td>
          </tr>
        </thead>
        <tbody>
          {capybaras.map((capybara) => (
            <Row capybara={capybara} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
