"use client";

import { usePathname } from "next/navigation";

import { ONE_CATEGORY_BOOKS_URL } from "@/app/constants";

import { BookCard } from "../ui/BookCard";

import * as Styles from "./Books.module.css";

export const getBooks = async (genre: string) => {
  const response = await fetch(ONE_CATEGORY_BOOKS_URL(genre));
  const data = await response.json();
  //@ts-ignore
  const books = data.results.books.map((book) => ({
    title: book.title,
    author: book.author,
    imageUrl: book.book_image,
    buyUrl: book.buy_links[0].url,
  }));
  return books;
};

const Books = async () => {
  const pathName = usePathname();
  const pathArray = pathName.split("/");
  const genre = pathArray[pathArray.length - 1];
  const books = await getBooks(genre);

  return (
    <div className={Styles.container}>
      {books.map(({ title, author, imageUrl, buyUrl }) => (
        <BookCard
          key={title}
          coverImage={imageUrl}
          title={title}
          author={author}
          outerLinkAddress={buyUrl}
        />
      ))}
    </div>
  );
};

export default Books;
