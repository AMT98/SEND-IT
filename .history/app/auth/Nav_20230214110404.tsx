import Link from "next/link";

export default const  Nav() => {
  return (
    <nav>
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
    </nav>
  );
}
