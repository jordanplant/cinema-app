import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-gold p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Golden Screen Cinema</h1>
      <nav className="flex gap-4">
        <Link href="/"><a>Home</a></Link>
        <Link href="/facilities"><a>Facilities</a></Link>
        <Link href="/bar"><a>Bar</a></Link>
        <Link href="/booking"><a>Booking</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    </header>
  );
}
