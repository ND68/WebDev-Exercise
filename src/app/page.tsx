import { getAll } from "@/server/db/actions/capybara";
import HeaderNav from "./HeaderNav";

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
    <main className="w-screen h-full">
      <HeaderNav currentPage="capybaras"/>
      <table className="w-[65%]">
        <thead>
          <tr className="bg-slate-200 font-bold">
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
            <td>Favorite Food</td>
          </tr>
        </thead>
        <tbody className="">
          {capybaras.map((capybara) => (
            <Row capybara={capybara} />
          ))}
        </tbody>
      </table>
      <div className="h-[10%]"></div>
    </main>
  );
}
