import Link from "next/link";
import Login from "./Login";

const Nav = async () => {
  return (
    <nav c>
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
      <ul>
        <Login />
      </ul>
    </nav>
  );
};

export default Nav;
