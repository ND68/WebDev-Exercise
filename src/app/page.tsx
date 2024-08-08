import Link from "next/link";

import styles from "./page.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Capybaras Among Us</h1>

      <Image src="/capybara.jpg" alt="eepy capybara" width={400} height={150} />
      <br />

      <Link href="/capybaras">Capybaras</Link>
      <br />
      <Link href="/supplies">Supplies</Link>
    </main>
  );
}
