import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="header">
      <div className="top-nav">
        <Image
          alt="logo"
          src="https://w7.pngwing.com/pngs/12/743/png-transparent-black-and-white-japanese-text-overlay-goku-t-shirt-dragon-ball-king-kai-art-kanji-text-logo-monochrome.png"
          width={50}
          height={50}
        />
        <nav>
          <img />
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
        </nav>
      </div>
      <h1>Dragon Ball Events</h1>
    </header>
  );
};
