import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="logo">
        <Link href={"/"}>Logo</Link>
      </h2>
      <nav className="navigation">
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>About</Link>
        <Link href={"/home"}>Services</Link>
        <Link href={"/home"}>Contact</Link>
        <Link href={"/login"} className="btnLogin-popup">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
