const ClientRenderNested = ({productList}) => {
    console.log(productList)
    return (
        <>
       {productList.map((item, index)=>{
        return(<p key={index}>{item.title}</p>)
       })} 
        </>
    )
}

export default ClientRenderNested