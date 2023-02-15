import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-xl">Send it.</h1>
      </Link>
      <ul className="flex items-center gap-6">{!session?.user && <Login />} {session?.user && <h1></h1>}</ul>
    </nav>
  );
};

export default Nav;
