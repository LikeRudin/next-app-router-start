import Link from "next/link";

import Styles from "./ArrowLink.module.css";

interface IArrowLink {
  text: string;
  address: string;
  isOuterLink: boolean;
}

const ArrowLink = ({ text, address, isOuterLink }: IArrowLink) =>
  isOuterLink ? (
    <a className={Styles.link} href={address}>
      {`${text} ↪`}
    </a>
  ) : (
    <Link className={Styles.link} href={address}>
      {`${text} ↪`}
    </Link>
  );

export default ArrowLink;
