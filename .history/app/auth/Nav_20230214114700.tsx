import Link from "next/link";
import Login from "./Login";
import {}

const Nav = async () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-xl">Send it.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  );
};

export default Nav;
