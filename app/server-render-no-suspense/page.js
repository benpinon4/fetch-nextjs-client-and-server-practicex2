import fetchProductCategories from "../api/fetchProductCategories"

export default  async function Page () {

    const fetchProdCats = await fetchProductCategories()
    return (
        <>

            {fetchProdCats.map((item, index)=>{
                return (
                    <p key={index}>{item}</p>
                )
            })}
            </>
    )
}