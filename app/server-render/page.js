import fetchProductCategories from "../api/fetchProductCategories"
import { Suspense } from "react"


export default async function Page () {

    const fetchProducts = await fetchProductCategories()
   


    const data = await fetch("https://fakestoreapi.com/products")
    const productList = await data.json()
    return (
        <>
        <h1>Product List Rendered by Server</h1>
        
        {productList.map((item, index)=>{
            return (<p key={index}>{item.title}</p>
                    
            )
        })}
        <br></br>
        <h1>Product Category List Renderred By Server</h1>
        {/* <Suspense fallback={<div>Loading</div>}>
        {fetchProducts.map((item, index)=>{
            return (<p key={index}>{item}</p>)
        })}
        </Suspense> */}
        
        </>
    )
}