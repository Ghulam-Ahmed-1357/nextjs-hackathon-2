import Image from "next/image";
import Header from "../components/header";
import Images from "../components/images";
import { ProductData } from "@/types/data";
import { getProducts } from "@/app/api_data/products";
import Link from "next/link";
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="h-[4230px] w-[1440px] bg-white overflow-hidden">
      <Header />
      <div
        id="Banner -> Mask Group"
        className="h-[716.83px] w-[1440px] absolute top-[95.7px]"
      >
        <Image
          src="/bitmap.png"
          alt="image"
          height={716.83}
          width={1440}
          className="border-[4px] border-[#44aee8] absolute top-0"
        />
        {/* <Image src="/Mask.png" alt="image" height={716.83} width={1440} /> */}
        <div
          id="group 114"
          className="h-[443px] w-[643px] absolute top-[153px] left-[739px] bg-[#fff3e3]"
        >
          <div className="h-[344px] w-[561px] absolute top-[62px] left-[39px]">
            <p className="text-[#333333] text-opacity-100 font-semibold text-[16px] tracking-[3px] leading-[auto]">
              New Arrival
            </p>
            <p className="font-bold text-[52px] leading-[65px] text-color1 font-[Poppins] absolute top-[28px]">
              Discover Our <br /> New Collection
            </p>
            <p className="w-[546px] font-medium text-[18px] leading-[24px] text-[#333333] font-[Poppins] absolute right-[56px] top-[172px] left-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link href={"/shop"}><button className="h-[74px] w-[222px] absolute bottom-[0px] bg-color1 text-[#ffffff]">
              BUY NOW
            </button></Link>
          </div>
        </div>
      </div>

      <div id="Group 115" className="absolute top-[869px] left-[131px] ">
        <div
          id="Group 107"
          className="h-[76.71px] w-[559px] absolute top-0 left-[318px]"
        >
          <p className="font-[Poppins] font-bold text-[32px] leading-[auto] absolute left-[94px] text-[#333333]">
            Browse The Range
          </p>
          <p className="font-[Poppins] font-normal text-[20px] leading-[auto] absolute left-0 top-[48px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative top-[139px] left-[0px] flex gap-5">
          <div className="h-[480px] w-[381px] relative"><Image src="/dining.png" alt="image" fill className="object-fill" /></div>
          <Image src="/living.png" alt="image" height={480} width={381} />
          <Image src="/bedroom.png" alt="image" height={480} width={381} />
        </div>
        <div className="absolute top-[649px] text-[#333333] font-[Poppins] font-semibold text-[24px] leading-[auto]">
          <p className="absolute left-[151px]">Dining</p>
          <p className="absolute left-[556px]">Living</p>
          <p className="absolute left-[936px]">Bedroom</p>
        </div>
      </div>

      <div
        id="Our Products"
        className="h-[1084px] w-[1236px] absolute top-[1610px] left-[102px]"
      >
        <p className="absolute left-[486px] font-[Poppins] font-bold text-[40px] leading-[120%] text-[#3a3a3a]">
          Our Products
        </p>
        <div
          id="Frame 7"
          className="h-[446px] w-[1236px] grid grid-cols-4 absolute top-[80px] left-0 gap-8"
        >
          {products.slice(0,8).map((product:ProductData) => (
            <Link href={`/product/${product._id}`}  key={product._id}><div
           
            className="transition-transform transform hover:scale-105"
          >
            <Images
              
              src={product.productImage_url}
              title={product.title}
              name={product.tags[0]}
              price={(product.price).toString()}
              previousprice={(Math.floor(product.price/(1-(product.dicountPercentage/100)))).toString()}
              discount={(product.dicountPercentage).toString()}
              labelType = {(product.dicountPercentage == 0 && product.isNew == false) ? "" : (product.dicountPercentage == 0 ? "isNew" : "discount")}
               />
               </div>
               </Link>
          ))}
          
        </div>
        <Link href={"/shop"}><button className="h-[48px] w-[245px] absolute top-[1036px] left-[496px] text-color1 border-[1px] border-color1">
          Show More
        </button></Link>
      </div>
      <div className="h-[670px] w-[1440px] absolute top-[2763px] bg-[#fcf8f3] font-[Poppins]">
        <div className="h-[151px] w-[422px] absolute top-[223px] left-[100px]">
          <p className="text-[40px] leading-[48px] font-bold text-[#3a3a3a]">
            50+ Beautiful rooms inspiration
          </p>
          <p className="text-[16px] leading-[24px] font-medium text-[#616161]">
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
        </div>
        <button className="h-[48px] w-[176px] absolute top-[399px] left-[100px] bg-color1 text-[#ffffff] text-[16px] leading-[24px] font-semibold">
          Explore More
        </button>

        <div className="h-[582px] w-[1196px] font-[Poppins]">
          <div className="absolute left-[564px] top-[44px]">
            <Image src="/r26-1.png" alt="image" height={582} width={404} />
            <div className="h-[130px] w-[217px] absolute top-[428px] left-[24px] bg-[#ffffff] bg-opacity-[0.72]">
              <div className="w-[142px] text-[16px] leading-[24px] font-medium text-[#616161] absolute top-[32px] left-[32px]">
                <p>01</p>
                <div className="w-[27px] border-[1px] border-[#616161] absolute top-[12px] left-[24px]"></div>
                <p className="absolute top-0 left-[59px]">Bed Room</p>
              </div>
              <div className="text-[28px] leading-[33.6px] font-semibold text-[#3a3a3a] absolute top-[64px] left-[32px]">
                Inner Peace
              </div>
            </div>
            <button className="h-[48px] w-[48px] absolute top-[510px] left-[241px] flex items-center justify-center bg-color1 text-white text-[24px]">
              →
            </button>
          </div>
          <Image
            src="/r26-2.png"
            alt="image"
            height={486}
            width={372}
            className="absolute top-[44px] left-[992px]"
          />
        </div>
        <div>
          <Image
            src="/r26-3.png"
            alt="image"
            height={486}
            width={52}
            className="absolute top-[44px] left-[1388px]"
          />
        </div>
        <div className="h-[48px] w-[48px] absolute top-[311px] left-[1337px] bg-[#ffffff] rounded-full flex justify-center items-center cursor-pointer">
          <Image
            src="/Line.png"
            alt="icon"
            height={14}
            width={7}
            className="bg-[]"
          />
        </div>
        <div className="h-[27px] w-[120px] absolute top-[570px] left-[992px] flex flex-row justify-between items-center">
          <div className="h-[27px] w-[27px] rounded-full border-[1px] border-color1 flex justify-center items-center">
            <div className="h-[11px] w-[11px] bg-color1 rounded-full" />
          </div>
          <div className="h-[11px] w-[11px] bg-[#d8d8d8] rounded-full" />
          <div className="h-[11px] w-[11px] bg-[#d8d8d8] rounded-full" />
          <div className="h-[11px] w-[11px] bg-[#d8d8d8] rounded-full" />
        </div>
      </div>

      <div className="h-[780px] w-[1440px] absolute top-[3500px]">
        <div className="h-[86px] w-[356px] absolute left-[525px] font-[Poppins]">
          <p className="text-[20px] leading-[30px] font-semibold text-[#616161] absolute left-[67px]">
            Share your setup with
          </p>
          <p className="text-[40px] leading-[48px] font-bold absolute top-[38px] text-[#3a3a3a]">
            #FuniroFurniture
          </p>
        </div>
        <div className="absolute top-[59px]">
          <Image
            src="/s1.png"
            alt="image"
            height={382}
            width={78}
            className=""
          />
          <Image
            src="/s2.png"
            alt="image"
            height={312}
            width={451}
            className="relative top-[-312px] left-[94px]"
          />
          <Image
            src="/s3.png"
            alt="image"
            height={392}
            width={295}
            className="absolute top-[156px] left-[561px]"
          />
          <Image
            src="/s4.png"
            alt="image"
            height={348}
            width={290}
            className="absolute top-[99px] left-[872px]"
          />
          <Image
            src="/s5.png"
            alt="image"
            height={433}
            width={262}
            className="absolute top-[14px] left-[1178px]"
          />
          <Image
            src="/s6.png"
            alt="image"
            height={323}
            width={185}
            className="absolute top-[398px] left-0"
          />
          <Image
            src="/s7.png"
            alt="image"
            height={242}
            width={344}
            className="absolute top-[398px] left-[201px]"
          />
          <Image
            src="/s8.png"
            alt="image"
            height={242}
            width={178}
            className="absolute top-[463px] left-[872px]"
          />
          <Image
            src="/s9.png"
            alt="image"
            height={196}
            width={258}
            className="absolute top-[463px] left-[1066px]"
          />
        </div>
      </div>
      
    </div>
  );
}
