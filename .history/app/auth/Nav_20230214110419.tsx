import Link from "next/link";

const  Nav = async() => {
  return (
    <nav>
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
    </nav>
  );
}
