import { use } from "react"


const ProductDetailsPage = ({params}) => {

    let params1 = use(params)


    return(<h1>Product Details Page {params1.productId}</h1>)
    
}

export default ProductDetailsPage