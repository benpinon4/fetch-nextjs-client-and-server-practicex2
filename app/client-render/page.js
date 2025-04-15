import { Suspense } from "react"
import ClientRender from "../ui/ClintRender"
import fetchProductCategories from "../api/fetchProductCategories"
import Loading from "./loading"

const Page = () => {
 let categoryList =  fetchProductCategories()
 
    return (
        <>
        <Suspense fallback={<Loading />}>
            <ClientRender categoryList={categoryList} />
        </Suspense>
        </>
    )

}

export default Page