"use client";
import Image from "next/image";
import { getProducts } from "@/app/api_data/products";
import { ProductData } from "@/types/data";
import Link from "next/link";
import Images from "@/components/images";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext";

export default function ProductDetail({
  params,
}: {
  params: { product: string };
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const handleAddToCart = (product: ProductData) => {
    addToCart(product, quantity);
  };
  // const [cart, setCart] = useState<ProductData[]>([]);
  // const [product, setProduct] = useState<ProductData | undefined>(undefined);

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

  //  const handleAddToCart = (product: ProductData) => {
  //    if(!cart.includes(product)){
  //    setCart((prevProduct) => [...prevProduct, product]);
  //    alert("Product added successfully.");
  //    } else{
  //      alert("Product is already added in the cart")
  //    }
  //  };

  const handleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const product: ProductData | undefined = products.find(
    (product: ProductData) => product._id === params.product
  );

  const relatedProducts: ProductData[] = products.filter(
    (p: ProductData) =>
      p._id !== product?._id &&
      p.tags.some((tag) => product?.tags.includes(tag))
  );

  if (!product) {
    return (
      <div className="flex justify-center pt-5 text-5xl">
        Product not found!
      </div>
    );
  } else {
    return (
      <div className="bg-gray-100 font-[Poppins] pt-10">
        <div className="flex flex-col bg-gray-100 md:flex-row">
          <div className="h-[300px] w-full md:w-[40%] relative bg-gray-100">
            <Image
              src={product.productImage_url}
              alt="image"
              fill
              className="object-contain p-1"
            />
          </div>

          <div className="m-2 flex flex-col gap-4 md:w-[60%]">
            <div className="font-bold text-3xl">{product.title}</div>
            <div>
              <div className="flex flex-row gap-10">
                <div className="font-normal text-xl text-orange-600 md:mt-5">
                  Rs. {product.price}
                </div>
                <div className="mt-2">
                  {product.dicountPercentage == 0 && (
                    <div
                      id="isNew"
                      className="h-[48px] w-[48px] md:left-16 lg:left-[86px] bg-[#2ec1ac] text-[#ffffff] rounded-full font-[Poppins] text-[16px] leading-[150%] font-medium flex justify-center items-center"
                    >
                      New
                    </div>
                  )}
                  {product.dicountPercentage != 0 && (
                    <div className="flex flex-row gap-4">
                      <p className="md:pt-3 text-gray-600">Discount</p>
                      <div
                        id="discount"
                        className="h-[48px] w-[48px] md:left-16 lg:left-[86px] bg-[#E97171] text-[#ffffff] rounded-full font-[Poppins] text-[16px] leading-[150%] font-medium flex justify-center items-center"
                      >
                        {product.dicountPercentage}%
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {product.dicountPercentage != 0 && (
                <div className="font-normal text-sm line-through text-gray-400">
                  Rp{" "}
                  {Math.floor(
                    product.price / (1 - product.dicountPercentage / 100)
                  ).toString()}
                </div>
              )}
            </div>

            <div className="h-10 flex flex-row gap-4 ">
              <div className="py-2 text-gray-600">Quantity</div>
              <div className="w-32 flex flex-row justify-between items-center border border-black rounded-xl">
                <button
                  className="w-1/4 rounded-s-xl text-xl px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={decrement}
                >
                  -
                </button>
                <div className="text-lg px-4">{quantity}</div>
                <button
                  className="w-1/4 rounded-e-xl text-xl px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-start items-center pt-6">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-52 h-12 md:h-16 text-base md:text-xl rounded-2xl border border-black text-black bg-gray-200"
              >
                Add To Cart
              </button>
            </div>

            <div
              className="font-normal text-base md:hidden"
              onClick={handleDescription}
            >
              {showFullDescription
                ? product.description
                : product.description.slice(0, 145) + "..."}
            </div>
          </div>
        </div>

        <div className="hidden md:block p-2 px-20 bg-gray-100 pt-16">
          <div className="flex flex-col justify-center items-center gap-4 bg-gray-300">
            <div className=" text-black text-2xl pt-2">Description</div>
            <div className="text-black flex justify-center items-center pb-2">
              {product.description}
            </div>
          </div>
        </div>

        <div className="text-2xl md:text-5xl pt-12 md:pt-20 font-bold bg-gray-200 px-4 md:px-8 ">
          Related Products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 pt-6 md:pt-10 bg-gray-200">
          {relatedProducts.slice(0, 4).map((product: ProductData) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="transition-transform transform hover:scale-105">
                <Images
                  src={product.productImage_url}
                  title={product.title}
                  name={product.tags[0]}
                  price={product.price.toString()}
                  previousprice={Math.floor(
                    product.price / (1 - product.dicountPercentage / 100)
                  ).toString()}
                  discount={product.dicountPercentage.toString()}
                  labelType={
                    product.dicountPercentage == 0 && product.isNew == false
                      ? ""
                      : product.dicountPercentage == 0
                        ? "isNew"
                        : "discount"
                  }
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center py-10 bg-gray-200">
          <Link href={"/shop"}>
            <button className="h-[48px] w-[245px] text-color1 border-[1px] border-color1 flex justify-center items-center">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
