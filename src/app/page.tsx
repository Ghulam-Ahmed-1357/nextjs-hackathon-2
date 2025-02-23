import Image from "next/image";
import Images from "../components/images";
import { ProductData } from "@/types/data";
import { getProducts } from "@/app/api_data/products";
import Link from "next/link";
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="w-full bg-white overflow-hidden">
      <div
        id="Banner -> Mask Group"
        className="h-[300px] md:h-[400px] lg:h-[716px] w-full"
      >
        <div className="h-[300px] md:h-[400px] lg:h-[716px] w-full relative">
          <Image
            src="/bitmap.png"
            alt="image"
            fill
            className="objext-fill border-[4px] border-[#44aee8]"
          />
        </div>

        {/* <Image src="/Mask.png" alt="image" height={716.83} width={1440} /> */}
        <div
          id="group 114"
          className="hidden md:block h-[200px] md:h-[300px] lg:h-[450px] md:w-[60%] w-[44.65%] lg:w-[55.65%] xl:w-[44.65%] absolute md:top-48 md:right-3 lg:top-80 bg-[#fff3e3]"
        >
          <div className="h-full w-[87.24%] flex flex-col justify-evenly px-4">
            <p className="text-[#333333] text-opacity-100 font-semibold text-[16px] tracking-[3px] leading-[auto]">
              New Arrival
            </p>
            <p className="font-bold text-[52px] leading-[65px] text-color1 font-[Poppins]">
              Discover Our <br /> New Collection
            </p>
            <p className="hidden lg:block w-[97.32%] font-medium text-[18px] leading-[24px] text-[#333333] font-[Poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link href={"/shop"}>
              <button className="h-[74px] w-[39.57%] bg-color1 text-[#ffffff]">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div id="Group 115" className="mt-14 md:mt-24">
        <div
          id="Group 107"
          className="h-[76.71px] w-full flex flex-col gap-2 justify-center items-center"
        >
          <p className="font-[Poppins] font-bold text-[32px] leading-[auto]  text-[#333333]">
            Browse The Range
          </p>
          <p className="font-[Poppins] font-normal text-[20px] leading-[auto] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex gap-5 mt-14 px-2 lg:px-5">
          <div className="h-[260px] lg:h-[480px] w-[48%] md:h-[360px] md:w-[381px] lg:w-1/3 2xl:h-[650px] relative">
            <Image src="/dining.png" alt="image" fill className="object-fill" />
          </div>
          <div className="h-[260px] lg:h-[480px] w-[48%] md:h-[360px] md:w-[381px] lg:w-1/3 2xl:h-[650px] relative">
            <Image src="/living.png" alt="image" fill className="object-fill" />
          </div>
          <div className="hidden md:block lg:h-[480px] md:h-[360px] md:w-[381px] lg:w-1/3 2xl:h-[650px] relative">
            <Image
              src="/bedroom.png"
              alt="image"
              fill
              className="object-fill"
            />
          </div>
        </div>

        <div className="text-[#333333] font-[Poppins] font-semibold pt-2 text-[24px] leading-[auto] flex justify-around">
          <p className="">Dining</p>
          <p className="">Living</p>
          <p className="hidden md:block">Bedroom</p>
        </div>
      </div>

      <div id="Our Products" className="w-full mt-14 md:mt-24 mb-14 md:mb-0">
        <p className="flex justify-center font-[Poppins] font-bold text-[40px] leading-[120%] text-[#3a3a3a]">
          Our Products
        </p>
        <div
          id="Frame 7"
          className="w-full px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 xl:px-8 md:gap-4 lg:gap-8"
        >
          {products.slice(0, 12).map((product: ProductData) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="transition-transform transform hover:scale-105 py-4">
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

        <div className="flex justify-center mt-10">
          <Link href={"/shop"}>
            <button className="h-[40px] w-[160px] md:h-[48px] md:w-[245px] flex justify-center items-center text-color1 border-[1px] border-color1">
              Show More
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="h-[670px] w-full mt-14 md:mt-24 bg-[#fcf8f3] font-[Poppins] flex flex-row px-5">
          <div className="w-[422px] md:w-1/2 lg:w-1/3 flex flex-col justify-center gap-5">
            <p className="text-[40px] leading-[48px] font-bold text-[#3a3a3a]">
              50+ Beautiful rooms inspiration
            </p>
            <p className="text-[16px] leading-[24px] font-medium text-[#616161]">
              Our designer already made a lot of beautiful <br /> prototipe of
              rooms that inspire you
            </p>
            <Link href={"/shop"}>
              <button className="h-[48px] w-[176px] bg-color1 text-[#ffffff] text-[16px] leading-[24px] font-semibold">
                Explore More
              </button>
            </Link>
          </div>

          <div className="h-full w-1/2 lg:w-2/3 font-[Poppins] flex justify-center items-center gap-5">
            <div className="h-[68%] w-full py-28 lg:w-1/2 relative">
              <Image
                src="/r26-1.png"
                alt="image"
                fill
                className="object-fill"
              />
            </div>

            <div className="hidden lg:block h-[68%] w-1/2 py-28 relative">
              <Image
                src="/r26-2.png"
                alt="image"
                fill
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full mt-14 md:mt-24 ">
        <div className="h-[86px] w-full font-[Poppins] flex flex-col justify-center items-center">
          <p className="text-[20px] leading-[30px] font-semibold text-[#616161]">
            Share your setup with
          </p>
          <p className="text-[40px] leading-[48px] font-bold text-[#3a3a3a]">
            #FuniroFurniture
          </p>
        </div>

        <div className="mb-40 lg:mb-80 xl:mb-40">
          <Image
            src="/s1.png"
            alt="image"
            height={382}
            width={78}
            className="ml-0"
          />
          <Image
            src="/s2.png"
            alt="image"
            height={312}
            width={451}
            className="mt-[-312px] ml-[94px]"
          />
          <Image
            src="/s3.png"
            alt="image"
            height={392}
            width={295}
            className="-mt-52 ml-[561px]"
          />
          <Image
            src="/s4.png"
            alt="image"
            height={348}
            width={290}
            className="mt-[-450px] ml-[872px] hidden xl:block"
          />
          <Image
            src="/s5.png"
            alt="image"
            height={433}
            width={262}
            className="xl:mt-[-433px] ml-[1178px] hidden xl:block"
          />
          <Image
            src="/s6.png"
            alt="image"
            height={323}
            width={185}
            className="mt-[-168px] xl:mt-[-65px] lg:ml-0"
          />
          <Image
            src="/s7.png"
            alt="image"
            height={242}
            width={344}
            className="mt-[-322px] ml-[201px]"
          />
          <Image
            src="/s8.png"
            alt="image"
            height={242}
            width={178}
            className="mt-[-600px] ml-[872px] xl:mt-[-160px] hidden lg:block"
          />
          <Image
            src="/s9.png"
            alt="image"
            height={196}
            width={258}
            className="lg:mt-[17px] lg:ml-[872px] xl:ml-[1067px] xl:mt-[-242px] hidden lg:block"
          />
        </div>
      </div>

    </div>
  );
}
