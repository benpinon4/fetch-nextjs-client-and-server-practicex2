"use client"

import { useRouter } from "next/navigation"

const Page = () => {
const router = useRouter()
let param = router.query
console.log(param)

// const {slug} = router.query

    return (<>
    Slug Page is 
    </>)

}

export default Page