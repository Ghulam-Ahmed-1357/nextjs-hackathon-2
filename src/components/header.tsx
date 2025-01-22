import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="h-[100px] w-[1440px] bg-[#ffffff] bg-opacity-100 text-[#000000] text-opacity-100 ">
      <div className="h-[41px] w-[1286px] mt-[29px] ml-[54px] flex bg-white">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={32}
          width={50}
          className="mt-[4.5px]"
        ></Image>
        <p className="h-[41px] w-[130px] ml-[5px]  font-[Montserrat] text-[34px] font-bold">
          Furniro
        </p>
        <ul className="h-[24px] w-[430px] ml-[266px] mt-[18px] flex justify-between items-center font-[Poppins] text-[16px] font-[500] leading-[24px]">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="h-[28px] w-[245px] mt-[11.67px] ml-[158px] flex justify-between items-center">
          <Image
            src="/1.svg"
            alt="image"
            height={28}
            width={28}
            className="cursor-pointer"
          />
          <Image
            src="/2.svg"
            alt="image"
            height={28}
            width={28}
            className="cursor-pointer"
          />
          <Image
            src="/3.svg"
            alt="image"
            height={28}
            width={28}
            className="cursor-pointer"
          />
          <Link href={"/cart"}><Image
            src="/4.svg"
            alt="image"
            height={28}
            width={28}
            className="cursor-pointer"
          /></Link>
        </div>
      </div>
    </div>
  );
}
