/* eslint-disable @next/next/no-async-client-component */
"use client";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";
import { useEffect, useState } from "react";
import Herosection from "../../components/group78";
import Features from "../../components/frame161";
import { getProducts } from "../api_data/products";
import Images from "@/components/images";
import { ProductData } from "@/types/data";
import Link from "next/link";


export default function Shop() {
  // const [selected, setSelected] = useState<number | null>(null);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  const filterProducts = searchItem ? products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchItem.toLowerCase())
      )
  ) : products;

  const otherProducts = products.filter(
    (product) => !filterProducts.includes(product)
  );

  // const handleSelect = (index: number) => {
  //   setSelected(index);
  // };
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="font-[Poppins] bg-white">
      <div className="">
        <Header />
      </div>

      <div>
        <Herosection title="Shop" previous_page="Home" current_page="Shop" />
      </div>

      {/* <div className="h-[100px] w-[1440px] bg-[#f9f1e7] absolute top-[417px] flex justify-center items-center">
        <div className="w-[1240px] flex justify-between items-center">
          <div className="h-[37] w-[451px] flex justify-between">
            <div className="h-[30px] w-[85px] flex justify-between">
              <button>
                <Image src="/unicon.png" alt="icon" height={25} width={25} />
              </button>
              <p className="font-normal text-[20px] leading-[30px]">Filter</p>
            </div>
            <button>
              <Image src="/grid.png" alt="icon" height={25} width={25} />
            </button>
            <button>
              <Image src="/view-list.png" alt="icon" height={25} width={25} />
            </button>
            <div className="w-[37px] border-l-2 border-[#9f9f9f] relative left-[18px] top-0"></div>
            <div className="h-[24px] w-[203px] font-normal text-[16px] leading-[24px]">
              Showing 1–16 of {products.length} results
            </div>
          </div>
          <div className="h-[55px] w-[443px] flex justify-between">
            <div className="w-[126px] font-normal text-[20px] leading-[30px] flex justify-between items-center">
              <p>Show</p>
              <input
                type="number"
                placeholder="16"
                className="h-[55px] w-[55px] text-center"
              />
            </div>
            <div className="w-[288px] font-normal text-[20px] leading-[30px] flex justify-between items-center">
              <p>Sort by</p>
              <input
                type="text"
                placeholder="Default"
                className="h-[55px] w-[188px] text-center"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-14 w-96 mt-24 ml-[100px] rounded-md flex flex-row justify-between items-center border border-black ">
        <input
          className="pl-4 w-[86%] focus:outline-none"
          placeholder="Search"
          id="search"
          type="text"
          value={searchItem}
          onChange={handleSearch}
        />
        <Image src={"/2.svg"} alt="icon" height={32} width={32} />
      </div>

      <div className="pt-10">
        <div id="Frame 7" className="px-[100px] grid grid-cols-4 gap-8">
          {filterProducts
            .slice(0, showMore ? filterProducts.length : 16)
            .map((product: ProductData) => (
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


        {searchItem && (
          <div className="pt-20">
            <div className="text-5xl font-bold px-[100px]">Other Products</div>
            <div id="Frame 7" className="px-[100px] pt-8 grid grid-cols-4 gap-8">
          {otherProducts
            .slice(0, showMore ? otherProducts.length : 16)
            .map((product: ProductData) => (
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
          </div>
        )}


      </div>

      <div className="flex justify-center items-center pt-16">
        <button
          className="h-[48px] w-[245px] text-color1 border-[1px] border-color1"
          onClick={handleShowMore}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="pt-20">
        <Features />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
