"use client";

import { use, useState, useTransition } from "react";
import fetchProductList from "../api/fetchProductList";
import ClientRenderNested from "./ClientRenderNested";

const ClientRender = ({ categoryList }) => {
  const [productList, setProductList] = useState([]);
  const [isPending, setTransition] = useState(false);

  let categories = use(categoryList);
  
  async function handleAdd() {
   setTransition(true)
    let data = await fetchProductList();
        setProductList(data);
  setTransition(false)
    }

  return (
    <>
      {categories.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <br></br>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Change Render
      </button>{isPending ? (
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
      ) : (
        <ClientRenderNested productList={productList} />
      )}
    </>
  );
};

export default ClientRender;
