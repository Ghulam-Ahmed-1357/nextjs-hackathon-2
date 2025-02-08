"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Herosection from "@/components/group78";
import client from "@/sanity/lib/client";

interface Order {
  id: number;
  items: {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    productImage_url: string;
  }[];
  date: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
         const user = JSON.parse(localStorage.getItem("user") || "null");
        if (!user) return;
    
        async function fetchOrders() {
          const result = await client.fetch(`*[_type == "order" && userId == $userId]`, { userId: user._id });
          setOrders(result);
        }
        
        fetchOrders();
      }, []);

  return (
    <div className="w-full font-[Poppins] text-black">
      <Herosection title="Orders" previous_page="Home" current_page="Orders" />

      <div className="px-[100px] py-[50px]">
        {orders.length === 0 ? (
          <p className="text-2xl">No orders placed yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="border p-5 mb-5">
              <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
              <p className="text-sm text-gray-600">Date: {new Date(order.date).toLocaleString()}</p>

              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Image</th>
                    <th className="border border-gray-300 px-4 py-2">Product</th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">Quantity</th>
                    <th className="border border-gray-300 px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item._id} className="border border-gray-300">
                      <td className="border border-gray-300 px-2 py-2">
                        <Image src={item.productImage_url} alt={item.title} height={105} width={108} />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                      <td className="border border-gray-300 px-4 py-2">Rp {item.price}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                      <td className="border border-gray-300 px-4 py-2">Rp {item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import client from "@/sanityClient";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user") || "null");
//     if (!user) return;

//     async function fetchOrders() {
//       const result = await client.fetch(`*[_type == "order" && userId == $userId]`, { userId: user._id });
//       setOrders(result);
//     }
    
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? <p>No orders yet.</p> : orders.map(order => <p>{order.productName}</p>)}
//     </div>
//   );
// }

