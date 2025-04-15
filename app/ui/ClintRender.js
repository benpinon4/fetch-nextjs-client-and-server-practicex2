"use client"

import { use } from "react";

const ClientRender = ({ categoryList }) => {
  let categories = use(categoryList)

  return (
    <>
      {categories.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};


export default ClientRender