import Image from "next/image";

export default function Features() {
  return (
    <div className="h-[270px] w-[1440px] bg-[#faf3ea] flex justify-center items-center">
      <div className="h-[70px] w-[1334px] flex justify-between">
        <div className="h-[70px] w-[337px] flex gap-[10px]">
          <div>
            <Image src="/trophy.png" alt="image" height={60} width={60} />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[25px] font-semibold leading-[37.5px] text-[#242424]">
              High Quality
            </p>
            <p className="text-[20px] font-medium leading-[30px] text-[#242424]">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="h-[70px] w-[337px] flex gap-[10px]">
          <div>
            <Image src="/guarantee.png" alt="image" height={60} width={60} />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[25px] font-semibold leading-[37.5px] text-[#242424]">
              Warranty Protection
            </p>
            <p className="text-[20px] font-medium leading-[30px] text-[#242424]">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="h-[70px] w-[337px] flex gap-[10px]">
          <div>
            <Image src="/shipping.png" alt="image" height={60} width={60} />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[25px] font-semibold leading-[37.5px] text-[#242424]">
              Free Shipping
            </p>
            <p className="text-[20px] font-medium leading-[30px] text-[#242424]">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="h-[70px] w-[337px] flex gap-[10px]">
          <div>
            <Image
              src="/customer-support.png"
              alt="image"
              height={60}
              width={60}
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[25px] font-semibold leading-[37.5px] text-[#242424]">
              24 / 7 Support
            </p>
            <p className="text-[20px] font-medium leading-[30px] text-[#242424]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
