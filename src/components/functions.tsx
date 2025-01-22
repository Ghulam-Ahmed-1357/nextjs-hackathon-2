'use client'
import { getProducts } from "@/app/api_data/products";
import { ProductData } from "@/types/data";
import { useEffect, useState } from "react";

export const FunctionsPage = () => {

 const [products, setProducts] = useState<ProductData[]>([]);
 const [searchItem, setSearchItem] = useState("");
 const [showMore, setShowMore] = useState(false);
 const [showFullDescription, setShowFullDescription] = useState(false);
 const [count, setCount] = useState(1);
 const [cart, setCart] = useState<ProductData[]>([]);
 const [product, setProduct] = useState<ProductData | undefined>(undefined);

  useEffect(() => {
     const fetchProducts = async () => {
       try {
         const products = await getProducts();
         setProducts(products);
       } catch (error) {
         console.error("Error fetching products:", error);
       }
     };
     fetchProducts();
   }, []);

 const handleShowMore = () => {
  setShowMore(!showMore);
};

 const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchItem(event.target.value);
};

 const filterProducts = searchItem
  ? products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchItem.toLowerCase())
        )
    )
  : products;

 const otherProducts = products.filter(
  (product) => !filterProducts.includes(product)
);

  const handleAddToCart = (product: ProductData) => {
    if(!cart.includes(product)){
    setCart((prevProduct) => [...prevProduct, product]);
    handleClickEvent();
    } else{
      alert("Product is already added in the cart")
    }
  };

  const handleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

    const handleClickEvent = ()=>{
    alert("Product added successfully.")
  }

    const increment = () => {
    setCount(count + 1);
  };
    const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return {
    products,
    searchItem,
    showMore,
    showFullDescription,
    count,
    cart,
    handleShowMore,
    handleSearch,
    filterProducts,
    otherProducts,
    handleAddToCart,
    increment,
    decrement,
    handleDescription,
    setProduct,
    setProducts
  };
}

