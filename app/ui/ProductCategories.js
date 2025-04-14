import fetchProductCategories from "../api/fetchProductCategories"


const ProductCategories = async ()  => {
const fetchProductCategoriesFunc = await fetchProductCategories()

return (
    <>
    {fetchProductCategoriesFunc.map((item, index)=>{
        return (<p key={index}>{item}</p>)
    })}</>
)

}

export default ProductCategories