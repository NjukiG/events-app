import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
  );
};
