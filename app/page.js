import Link from "next/link";
import cls from "./page.module.css";
import ImageSlideshow from "@/components/image-slideshow/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={cls.hero}>
            <h1>Great Food is here</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={cls.cta}>
            <Link href="/community">Join community</Link>
            <Link href="/meals">Try best meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={cls.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={cls.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
