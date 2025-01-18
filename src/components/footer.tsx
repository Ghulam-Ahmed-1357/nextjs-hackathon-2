import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[505px] w-[1440px] border-t-[1px] font-[Poppins] bg-white">
      <div className="h-[419px] w-[1240px] absolute top-[48px] left-[100px]">
        <p className="text-[24px] leading-[36px] font-bold">Funiro.</p>
        <div className="h-[72px] w-[285px] absolute top-[86px] text-[16px] leading-[24px] font-normal text-[#9f9f9f]">
          400 University Drive Suite 200 Coral Gables, <br />
          FL 33134 USA
        </div>
        <div className="h-[312px] w-[710px] absolute top-0 left-[423px] border-[1px] border-white">
          <div>
            <p className="text-[16px] leading-[24px] font-medium text-[#9f9f9f]">
              Links
            </p>
            <div className="h-[233px] w-[66px] absolute top-[79px] flex flex-col justify-between text-[16px] leading-[24px] font-medium">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="absolute left-[212px] top-0 text-[16px] leading-[24px] font-medium text-[#9f9f9f]">
              Help
            </p>
            <div className="h-[163px] w-[140px] absolute top-[79px] left-[212px] flex flex-col justify-between text-[16px] leading-[24px] font-medium">
              <Link href="/">Payment Options</Link>
              <Link href="/">Returns</Link>
              <Link href="/">Privacy Policies</Link>
            </div>
          </div>

          <div className="h-[101px] w-[286px] absolute top-0 left-[424] font-[Poppins]">
            <p className="text-[16px] leading-[24px] font-medium text-[#9f9f9f] absolute top-0 left-[424px]">
              Newsletter
            </p>
            <div className="h-[21px] w-[173px] text-[14px] leading-[21px] font-normal text-[#9f9f9f] absolute top-[79px] left-[424px] border-b border-[#000000]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent text-black"
              />
            </div>
            <div className="text-[14px] leading-[21px] font-medium text-[#000000] absolute top-[79px] left-[635px] border-b border-[#000000]">
              <button>SUBSCRIBE</button>{" "}
            </div>
          </div>
        </div>

        <div className="h-[59px] w-[1240px] absolute top-[408px] left-0 border-t-[1px] border-[#d9d9d9] flex flex-col justify-end text-[16px] leading-[24px] font-normal">
          2023 furino. All rights reverved
        </div>
      </div>
    </div>
  );
}
