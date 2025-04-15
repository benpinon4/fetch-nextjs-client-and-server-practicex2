export default async function fetchProductList() {
    await new Promise(resolve => setTimeout(resolve, 4000));
  
    const res = await fetch('https://fakestoreapi.com/products');
  
    // if (!res.ok) {
    //   throw new Error('Failed to fetch categories');
    // }
  
    const products = await res.json();
    // if (!Array.isArray(categories)) {
    //   throw new Error('API returned non-array response');
    // }
  console.log(products)
    return products;
  }