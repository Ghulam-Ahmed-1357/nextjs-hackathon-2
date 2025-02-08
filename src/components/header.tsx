"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
if (storedUser) {
  setUser(JSON.parse(storedUser));
}
  }, []);

  const handleAuthClick = () => {
    if (user) {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/signin"); 
      }
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className="h-[100px] w-full bg-[#ffffff] bg-opacity-100 text-[#000000] text-opacity-100 ">
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
          <li>
            <Link href="/orders">Orders</Link>
          </li>
        </ul>
        <div className="h-[28px] w-[245px] mt-[11.67px] ml-[158px] flex justify-around items-center">
          <button onClick={handleAuthClick}>
            <Image
              src="/1.svg"
              alt="image"
              height={28}
              width={28}
              className="cursor-pointer"
            />
          </button>
          <Link href={"/shop"}>
            <Image
              src="/2.svg"
              alt="image"
              height={28}
              width={28}
              className="cursor-pointer"
            />
          </Link>
          {/* <Image
            src="/3.svg"
            alt="image"
            height={28}
            width={28}
            className="cursor-pointer"
          /> */}
          <Link href={"/cart"}>
            <Image
              src="/4.svg"
              alt="image"
              height={28}
              width={28}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
