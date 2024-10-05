import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Star Wars App</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/favorites">
                <h1 className="hover:underline">Favorites</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
