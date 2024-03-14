import Image from "next/image";
import styles from "./page.module.css";
import { Counter } from "@/components"; //using barrel imports for a much cleaner imports

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Nextjs Counter App
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Counter />
      </div>

    </main>
  );
}
