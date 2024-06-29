import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>About</Link>
        <Link href={"/home"}>Services</Link>
        <Link href={"/home"}>Contact</Link>
        <button className="btnLogin-popup">Login</button>
      </nav>
    </header>
  );
};

export default Header;
