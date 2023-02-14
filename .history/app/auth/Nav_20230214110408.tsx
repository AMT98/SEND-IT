import Link from "next/link";

export default const  Nav = async() => {
  return (
    <nav>
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
    </nav>
  );
}
