"use client";
import Post from "../../components/blog";
import Footer from "../../components/footer";
import Features from "../../components/frame161";
import Herosection from "../../components/group78";
import Header from "../../components/header";
import { useState } from "react";
import Image from "next/image";

export default function Blog() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number ) => {
    setSelected(index);
  };
  return (
    <div className="h-[3981px] w-[1440] bg-white md:bg-white">
      <div className="absolute top-0 bg-white">
        <Header />
      </div>

      <div className="bg-white">
        <Herosection
          title="Blog"
          previous_page="Home"
          current_page="Blog"
          image="logo"
        />
      </div>

      <div className="h-[2710px] w-[1440px] absolute top-[416px] font-[Poppins] bg-white">
        <div className="h-[2490px] w-[820px] absolute top-[106px] left-[97px]">
          <div>
            <Post
              title="Going all-in with millennial design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              src="/blog1.png"
            />
          </div>

          <div className="absolute top-[848px]">
            <Post
              title="Exploring new ways of decorating"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              src="/blog2.png"
            />
          </div>

          <div className="absolute top-[1696px]">
            <Post
              title="Handmade pieces that took time to make"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              src="/blog3.png"
            />
          </div>
        </div>

        <div className="">
          <div className="absolute top-[84px] left-[947px]">
            <input
              type="text"
              className="h-[58px] w-[311px] absolute top-[22px] left-[41px] border-[1px] rounded-[10px]"
            />
            <Image
              src="/search-icon.png"
              alt="icon"
              height={24}
              width={24}
              className="relative top-[41px] left-[320px]"
            />

            <div className="flex">
              <div className="h-[353px] w-[251px] absolute top-[123px] left-[77px] flex flex-col justify-between font-normal text-[16px] leading-[24px] text-[#9f9f9f]">
                <p className="font-medium text-[24px] leading-[36px] text-black">
                  Categories
                </p>
                <p>Crafts</p>
                <p>Design</p>
                <p>Handmade</p>
                <p>Interior</p>
                <p>Wood</p>
              </div>

              <div className="h-[284px] w-[251px] absolute top-[196px] left-[317px] flex flex-col justify-between font-normal text-[16px] leading-[24px] text-[#9f9f9f]">
                <p>2</p>
                <p>8</p>
                <p>7</p>
                <p>1</p>
                <p>6</p>
              </div>
            </div>
          </div>
          <div className="h-[650px] w-[393px] absolute top-[662px] left-[947px]">
            <div className="h-[618px] w-[377px] absolute top-[16px] left-[77px] text-black flex flex-col justify-between">
              <div className="font-medium text-[24px] leading-[36px]">
                Recent Posts
              </div>
              <div className="h-[80px] w-[211px] flex justify-between">
                <Image
                  src="/rp1.png"
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-[10px]"
                ></Image>
                <div className="h-[65px] w-[119px]">
                  <p className="font-normal text-[14px] leading-[21px] text-black relative top-[8px]">
                    Going all-in with millennial design
                  </p>
                  <p className="font-normal text-[12px] leading-[18px] text-[#9f9f9f] relative top-[6px]">
                    03 Aug 2022
                  </p>
                </div>
              </div>
              <div className="h-[80px] w-[211px] flex justify-between">
                <Image
                  src="/rp2.png"
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-[10px]"
                ></Image>
                <div className="h-[65px] w-[119px]">
                  <p className="font-normal text-[14px] leading-[21px] text-black relative top-[8px]">
                    Exploring new ways of decorating
                  </p>
                  <p className="font-normal text-[12px] leading-[18px] text-[#9f9f9f] relative top-[6px]">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              <div className="h-[80px] w-[252px] flex justify-between">
                <Image
                  src="/rp3.png"
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-[10px]"
                ></Image>
                <div className="h-[65px] w-[160px]">
                  <p className="font-normal text-[14px] leading-[21px] text-black relative top-[8px]">
                    Handmade pieces <br /> that took time to make
                  </p>
                  <p className="font-normal text-[12px] leading-[18px] text-[#9f9f9f] relative top-[6px]">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              <div className="h-[80px] w-[211px] flex justify-between">
                <Image
                  src="/rp4.png"
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-[10px]"
                ></Image>
                <div className="h-[65px] w-[119px]">
                  <p className="font-normal text-[14px] leading-[21px] text-black relative top-[8px]">
                    Modern home in Milan
                  </p>
                  <p className="font-normal text-[12px] leading-[18px] text-[#9f9f9f] relative top-[6px]">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              <div className="h-[80px] w-[211px] flex justify-between">
                <Image
                  src="/rp5.png"
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-[10px]"
                ></Image>
                <div className="h-[65px] w-[119px]">
                  <p className="font-normal text-[14px] leading-[21px] text-black relative top-[8px]">
                    Colorful office redesign
                  </p>
                  <p className="font-normal text-[12px] leading-[18px] text-[#9f9f9f] relative top-[6px]">
                    03 Aug 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[90px] w-[392px] absolute top-[2650px] left-[524px] flex flex-col justify-end bg-white">
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

      <div className="absolute top-[3184px] bg-white">
        <Features />
      </div>

      <div className="absolute top-[3478px]">
        <Footer />
      </div>
    </div>
  );
}
