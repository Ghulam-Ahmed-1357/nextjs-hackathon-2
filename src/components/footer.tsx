import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[505px] w-full border-t-[1px] font-[Poppins] bg-white">
      
      <div className="">
      <div className="flex flex-row mx-10 md:mx-0">
        <div className="pt-12 md:pl-[100px]">
        <p className="text-[24px] leading-[36px] font-bold">Funiro.</p>
        <div className="h-[72px] pt-[52px] text-[16px] leading-[24px] font-normal text-[#9f9f9f]">
          400 University Drive Suite 200 Coral Gables, <br />
          FL 33134 USA
        </div>
        </div>

        <div className="flex flex-row pt-12 border-[1px] border-white pl-4 md:pl-[138px]">
          <div className="">
            <p className="text-[16px] leading-[24px] font-medium text-[#9f9f9f]">
              Links
            </p>
            <div className="gap-[46px] pt-[55px] flex flex-col justify-between text-[16px] leading-[24px] font-medium">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="hidden md:block pl-[162px] md:pr-20 lg:pr-0">
            <p className="text-[16px] leading-[24px] font-medium text-[#9f9f9f]">
              Help
            </p>
            <div className="flex pt-[55px] flex-col gap-[46px] justify-between text-[16px] leading-[24px] font-medium">
              <Link href="/">Payment Options</Link>
              <Link href="/">Returns</Link>
              <Link href="/">Privacy Policies</Link>
            </div>
          </div>

          <div className="font-[Poppins] pl-[72px] hidden lg:block">
            <p className="text-[16px] leading-[24px] font-medium text-[#9f9f9f]">
              Newsletter
            </p>
            <div className="flex flex-row gap-3 pt-[55px] ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent focus:outline-none h-[21px] w-[173px] text-[14px] leading-[21px] font-normal text-[#9f9f9f] border-b border-[#000000]"
              />
              <button className="text-[14px] leading-[21px] font-medium text-[#000000] border-b border-[#000000]">SUBSCRIBE</button>{" "}

            </div>
            
           
          </div>
        </div>
        </div>
        </div>
      

      <div className="h-[59px] mt-12 mx-10 lg:mx-[100px] border-t-[1px] border-[#d9d9d9] flex flex-col justify-end items-center text-[16px] leading-[24px] font-normal">
        2023 furino. All rights reverved
      </div>
    </div>
  );
}
