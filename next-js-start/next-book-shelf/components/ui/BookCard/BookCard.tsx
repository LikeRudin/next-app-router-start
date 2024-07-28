import Image from "next/image";

import { ArrowLink } from "../ArrowLink";

import * as Styles from "./BookCard.module.css";

interface IBookCardProps {
  coverImage: string;
  title: string;
  author: string;
}

const BookCard = ({
  coverImage,
  title,
  author,
  outerLinkAddress,
}: IBookCardProps) => (
  <div className={Styles.container}>
    <img src={coverImage} alt="!BookCoverImage!" className={Styles.img} />
    <span className={Styles.title}>{title}</span>
    <span className={Styles.author}>{author}</span>
    <ArrowLink text="Buy Now" address={outerLinkAddress} isOuterLink />
  </div>
);

export default BookCard;
