import Link from "next/link";

import * as Styles from "./NavBar.module.css";

const NavBar = () => (
  <div className={Styles.container}>
    <Link href="/" className={Styles.button}>
      Home
    </Link>
    <Link href="/about" className={Styles.button}>
      About
    </Link>
  </div>
);

export default NavBar;
