import Herosection from "@/components/group78";
import Header from "@/components/header";
import Image from "next/image";

export default function Cart(){
    // const handleRemoveFromCart = (product_id:string)=>
    //     {
    //         const newData = cart.filter((item)=>{
    //             return item._id != product_id
    //         })
    //         setCart(newData)
    //     }
    
    return(<div>
        <div>
            <Header/>
        </div>

        <div>
            <Herosection title="Cart" previous_page="Home" current_page="Cart" image="logo"/>
        </div>

        <div className="flex flex-row mx-[100px] my-[67px]">
            <div>
            <div className="grid grid-cols-5 items-center font-medium text-[16px] text-black bg-[#f9f1e7] px-4 py-2 ">
            <span className="col-span-2">Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
            </div>

            <div className="grid grid-cols-5 items-center px-4 py-4">
                <div className="col-span-2 flex items-center space-x-4"><Image src={""} alt="image" height={105} width={108}/>
                <span className="text-[#9f9f9f]">title</span>
            </div>

            <div className="text-[#9f9f9f]">Rp price</div>

            <div><input type="number" min={"1"} defaultValue={`{quantity}`} className="h-8 w-8 text-center focus:outline-none rounded-md border border-[#9f9f9f]" /></div>

            <div>
                <span className="text-black">sum</span>
                <button className="ml-14"><Image src={"/delete.svg"} alt="icon" height={28} width={28}/></button>
            </div>
            </div>
            </div>

            <div className="cart total "></div>
        </div>

    </div>);
}