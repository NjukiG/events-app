import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="top-nav">
          <Image
            alt="logo"
            src="https://www.kindpng.com/picc/m/86-860034_kame-kanji-dragon-ball-dragonball-goku-vegeta-muten.png"
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h2 className="title">Dragon Ball Events</h2>
      </div>
    </header>
  );
};
