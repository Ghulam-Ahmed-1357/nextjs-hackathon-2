"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import Images from "../components/images";
import { useState } from "react";
import Herosection from "../components/group78";
import Features from "../components/frame161";

export default function Shop() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="h-[3474px] w-[1440px] font-[Poppins] bg-white">
      <div className="absolute top-0">
        <Header />
      </div>

      <div>
        <Herosection title="Shop" previous_page="Home" current_page="Shop" />
      </div>

      <div className="h-[100px] w-[1440px] bg-[#f9f1e7] absolute top-[417px] flex justify-center items-center">
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
              Showing 1–16 of 32 results
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
      </div>

      <div className="h-[2034px] w-[1244px] absolute top-[580px] left-[99px]">
        <div id="Frame 7" className="h-[446px] w-[1236px] flex gap-8">
          <Images
            src="/f1.png"
            title="Syltherine"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
            discount="-30%"
            labelType="discount"
          />
          <Images
            src="/f2.png"
            title="Leviosa"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
          />
          <Images
            src="/f3.png"
            title="Lolito"
            name="Luxury big sofa"
            rate="Rp 7.000.000"
            previousrate="Rp 14.000.000"
            discount="-50%"
            labelType="discount"
          />
          <Images
            src="/f4.png"
            title="Respira"
            name="Outdoor bar table and stool"
            rate="Rp 500.000"
            previousrate="Rp 14.000.000"
            labelType="new"
          />
        </div>
        <div
          id="Frame 8"
          className="h-[446px] w-[1236px] absolute top-[486px] left-0 flex gap-8"
        >
          <Images
            src="/f1.png"
            title="Syltherine"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
            discount="-30%"
            labelType="discount"
          />
          <Images
            src="/f2.png"
            title="Leviosa"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
          />
          <Images
            src="/f3.png"
            title="Lolito"
            name="Luxury big sofa"
            rate="Rp 7.000.000"
            previousrate="Rp 14.000.000"
            discount="-50%"
            labelType="discount"
          />
          <Images
            src="/f4.png"
            title="Respira"
            name="Outdoor bar table and stool"
            rate="Rp 500.000"
            previousrate="Rp 14.000.000"
            labelType="new"
          />
        </div>
        <div
          id="Frame 9"
          className="h-[446px] w-[1236px] absolute top-[972px] left-0 flex gap-8"
        >
          <Images
            src="/f1.png"
            title="Syltherine"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
            discount="-30%"
            labelType="discount"
          />
          <Images
            src="/f2.png"
            title="Leviosa"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
          />
          <Images
            src="/f3.png"
            title="Lolito"
            name="Luxury big sofa"
            rate="Rp 7.000.000"
            previousrate="Rp 14.000.000"
            discount="-50%"
            labelType="discount"
          />
          <Images
            src="/f4.png"
            title="Respira"
            name="Outdoor bar table and stool"
            rate="Rp 500.000"
            previousrate="Rp 14.000.000"
            labelType="new"
          />
        </div>
        <div
          id="Frame 10"
          className="h-[446px] w-[1236px] absolute top-[1458px] left-0 flex gap-8"
        >
          <Images
            src="/f1.png"
            title="Syltherine"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
            discount="-30%"
            labelType="discount"
          />
          <Images
            src="/f2.png"
            title="Leviosa"
            name="Stylish cafe chair"
            rate="Rp 2.500.000"
            previousrate="Rp 3.500.000"
          />
          <Images
            src="/f3.png"
            title="Lolito"
            name="Luxury big sofa"
            rate="Rp 7.000.000"
            previousrate="Rp 14.000.000"
            discount="-50%"
            labelType="discount"
          />
          <Images
            src="/f4.png"
            title="Respira"
            name="Outdoor bar table and stool"
            rate="Rp 500.000"
            previousrate="Rp 14.000.000"
            labelType="new"
          />
        </div>
        <div className="h-[90px] w-[392px] absolute top-[1944px] left-[426px] flex flex-col justify-end">
          <div className="flex flex-row justify-between">
            {["1", "2", "3"].map((button, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={` h-[60px] w-[60px] rounded-[10px] font-normal text-[20px] leading-[30px]
                      ${
                        selected === index
                          ? "bg-color1 text-white"
                          : "bg-[#f9f1e7] text-black"
                      }
                      `}
              >
                {button}
              </button>
            ))}
            <button
              onClick={() => handleSelect(3)}
              className={` h-[60px] w-[98px] rounded-[10px] font-normal text-[20px] leading-[30px]
                      ${
                        selected === 3
                          ? "bg-color1 text-white"
                          : "bg-[#f9f1e7] text-black"
                      }
                      `}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-[2699px]">
        <Features />
      </div>

      <div className="absolute top-[2969px]">
        <Footer />
      </div>
    </div>
  );
}
