export default async function fetchProductCategories() {
    await new Promise(resolve => setTimeout(resolve, 4000));
  
    const res = await fetch('https://fakestoreapi.com/products/categories');
  
    // if (!res.ok) {
    //   throw new Error('Failed to fetch categories');
    // }
  
    const categories = await res.json();
    // if (!Array.isArray(categories)) {
    //   throw new Error('API returned non-array response');
    // }
  
    return categories;
  }