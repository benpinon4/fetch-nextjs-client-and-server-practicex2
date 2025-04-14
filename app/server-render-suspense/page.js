import { Suspense } from "react"
import ProductCategories from "../ui/ProductCategories"


const Page = async () => {



    return (
    
        <Suspense fallback={<div>Loading</div>}>
            <ProductCategories/>
        </Suspense>
    
    )
}

export default Page