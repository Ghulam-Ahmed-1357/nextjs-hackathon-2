import Image from "next/image";
export default function Herosection({
  title = "",
  previous_page = "",
  current_page = "",
  image = "",
}) {
  return (
    <div className="h-[316px] w-full ">
      <Image src="/shop1.png" alt="image" height={316} width={1440} />

      <div className="absolute top-[175px] left-[682px]">
        {image === "logo" && (
          <div className="h-[77px] w-[77px]  flex justify-center items-center">
            <Image src="/logo.svg" alt="logo" height={32} width={50} />
          </div>
        )}
      </div>

      <div className="h-[96px] w-[124px] pt-[110px] absolute top-[121px] left-[658px]">
        <div className="h-[72px] text-[48px] font-medium leading-[72px] flex justify-center items-center">
          {title}
        </div>

        <div className="h-[24px] w-[121px] pt-[120px] flex flex-row justify-between items-center absolute top-[74px] ">
          <p className="text-[16px] font-medium leading-[24px]">
            {previous_page}{" "}
          </p>
          <Image src="/arrow.png" alt="vector" height={20} width={20} />
          <p className="text-[16px] font-light leading-[24px]">
            {current_page}
          </p>
        </div>
      </div>
    </div>
  );
}
