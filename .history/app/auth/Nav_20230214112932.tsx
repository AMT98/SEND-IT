import Link from "next/link";
import Login from "./Login";

const Nav = async () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-xl">Send it.</h1>
      </Link>
      <ul className="flex item">
        <Login />
      </ul>
    </nav>
  );
};

export default Nav;
