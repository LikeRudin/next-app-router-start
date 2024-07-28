import { CATEGORIES_URL } from "@/app/constants";

import { ArrowLink } from "../ui/ArrowLink";

import Styles from "./Categories.module.css";

const getCategories = async () => {
  const response = await fetch(CATEGORIES_URL);
  return response.json();
};

const Categories = async () => {
  const categories = await getCategories();
  //@ts-ignore
  const resultList = categories.results.map((item, index) => (
    <ArrowLink
      text={item.list_name}
      address={`/list/${item.list_name_encoded}`}
      key={index}
      isOuterLink={false}
    />
  ));
  return <div className={Styles.container}>{resultList}</div>;
};

export default Categories;
