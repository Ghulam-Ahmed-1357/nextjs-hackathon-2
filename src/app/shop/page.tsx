import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";
import Herosection from "../../components/group78";
import Features from "../../components/frame161";
import Images from "@/components/images";
import { ProductData } from "@/types/data";
import Link from "next/link";
import { FunctionsPage } from "@/components/functions";
import { useEffect } from "react";
import { getProducts } from "../api_data/products";

export default async function Shop() {
  const {
    searchItem,
    showMore,
    handleShowMore,
    handleSearch,
    otherProducts,
  } = FunctionsPage();

  const products = await getProducts();

  const filterProducts: ProductData[] = searchItem
  ? products.filter(
      (p: ProductData) =>
        p.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        p.tags.some((tag) =>
          tag.toLowerCase().includes(searchItem.toLowerCase())
        )
    )
  : products;

  return (
    <div className="font-[Poppins] bg-white">
      <div className="">
        <Header />
      </div>

      <div>
        <Herosection title="Shop" previous_page="Home" current_page="Shop" />
      </div>

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
            <div
              id="Frame 7"
              className="px-[100px] pt-8 grid grid-cols-4 gap-8"
            >
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
                          product.dicountPercentage == 0 &&
                          product.isNew == false
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
