"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[100px] w-full bg-[#ffffff] bg-opacity-100 text-[#000000] text-opacity-100 gap-6 md:gap-0 flex md:justify-between items-center px-2 md:px-10 lg:px-16 xl:px-24">
      
<div className="md:hidden">
<button onClick={() => setIsOpen(!isOpen)} className="p-2 pt-4">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
</div>

<div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}> 
        <div className="w-64 bg-white h-full p-5">
          <button onClick={() => setIsOpen(false)} className="mb-4">
            <X size={24} />
          </button>
          <ul className="space-y-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/orders" onClick={() => setIsOpen(false)}>Orders</Link></li>
          </ul>
          <div className="flex gap-5 mt-4">
            <button onClick={() => console.log("Auth Clicked")}>
              <Image src="/1.svg" alt="image" height={28} width={28} className="cursor-pointer" />
            </button>
            <Link href="/shop">
              <Image src="/2.svg" alt="image" height={28} width={28} className="cursor-pointer" />
            </Link>
            <Link href="/cart">
              <Image src="/4.svg" alt="image" height={28} width={28} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[41px] flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={32}
          width={50}
          className="mt-[4.5px]"
        ></Image>
        <p className="h-[41px] ml-[5px]  font-[Montserrat] text-[34px] font-bold">
          Furniro
        </p>
    </div>

      <div className="hidden md:block mt-4">
      <ul className="h-[24px] flex justify-between items-center gap-5 lg:gap-10 xl:gap-16 font-[Poppins] text-[16px] font-[500] leading-[24px]">
           
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
      </div>

<div className="hidden md:block">
      <div className=" h-[28px] mt-4 flex gap-5 lg:gap-10 xl:gap-16">
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