"use client";
import Herosection from "@/components/group78";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import { CartItem } from "@/app/context/cartContext";
import Features from "@/components/frame161";

export default function Cart() {

  const { cart, removeFromCart, addToCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full font-[Poppins] text-black">
     
      <div>
        <Herosection
          title="Cart"
          previous_page="Home"
          current_page="Cart"
          image="logo"
        />
      </div>

      <div className="w-full flex flex-row px-[100px] py-[67px] gap-[30px]">
        <div className="w-[80%] ">
          <table className="w-full">
            <thead className="bg-[#f9f1e7]">
              <tr className="">
                <th></th>
                <th className="text-start py-4">Product</th>
                <th className="text-start py-4">Price</th>
                <th className="text-start py-4">Quantity</th>
                <th className="text-start py-4">Subtotal</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="">
              {cart.map((item: CartItem) => {
                return (
                  <tr key={item._id} className="pt-14">
                    <td className="pt-10">
                      <Image
                        src={`${item.productImage_url}`}
                        alt="image"
                        height={105}
                        width={108}
                      />
                    </td>
                    <td className="pt-10">{item.title}</td>
                    <td className="pt-10">Rp {item.price}</td>
                    <td className="px-4 pt-10">
                      <input
                        type="number"
                        min={"1"}
                        value={item.quantity}
                        onChange={(e) =>
                          addToCart(
                            item,
                            Number(e.target.value) - item.quantity
                          )
                        }
                        className="h-8 w-8 text-center focus:outline-none rounded-md border border-[#9f9f9f]"
                      />
                    </td>
                    <td className="px-5 pt-10">{item.price * item.quantity}</td>
                    <td className="pt-10">
                      <button onClick={() => removeFromCart(item._id)}>
                        <Image
                          src={"/delete.svg"}
                          alt="icon"
                          height={28}
                          width={28}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="h-[390px] w-[27.29%]">
          <div className="cart total flex flex-col h-full w-full bg-[#f9f1e7] items-center">
            <div className="font-semibold text-[32px] leading-[48px] pt-8">
              Cart Totals
            </div>
            <div className="w-[61.83%] pt-[61px] flex justify-between">
              <span>Subtotal</span> <span>Rp {subtotal}</span>
            </div>
            <div className="w-[61.83%] pt-[31px] flex justify-between">
              <span>Total</span>{" "}
              <span className=" text-color1">Rp {subtotal}</span>{" "}
            </div>
            <div className="pt-12">
              <button className="border border-black w-[222px] h-[58.95px] rounded-2xl py-[14px] px-[55px] text-xl font-normal">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Features />
      </div>

    </div>
  );
}
