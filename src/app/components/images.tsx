import Image from "next/image";

export default function Images({
  src = "",
  title = "",
  name = "",
  rate = "",
  previousrate = "",
  discount = "",
  labelType = "",
}) {
  return (
    <div className="h-[446px] w-[285px]  relative group">
      <div>
        <Image src={src} alt="image" width={285} height={301} />
        {labelType === "new" && (
          <div
            id="new"
            className="h-[48px] w-[48px] absolute top-[24px] left-[213px] bg-[#2ec1ac] text-[#ffffff] rounded-full font-[Poppins] text-[16px] leading-[150%] font-medium flex justify-center items-center"
          >
            New
          </div>
        )}
        {labelType === "discount" && (
          <div
            id="discount"
            className="h-[48px] w-[48px] absolute top-[24px] left-[213px] bg-[#E97171] text-[#ffffff] rounded-full font-[Poppins] text-[16px] leading-[150%] font-medium flex justify-center items-center"
          >
            {discount}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-[#3a3a3a] bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="h-[48px] w-[202px] bg-[#ffffff] text-[#e89f71] absolute top-[175px] left-[41px]">
          Add to cart
        </button>
        <div className="flex space-x-4 text-white absolute top-[247px] left-[16px] gap-3 font-[Poppins] font-semibold text-[16px] leading-[150%]">
          <button className="flex items-center space-x-1">
            <Image src="/share.svg" alt="image" height={16} width={16} />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1">
            <Image src="/compare.svg" alt="image" height={16} width={16} />
            <span>Compare</span>
          </button>
          <button className="flex items-center space-x-1">
            <Image src="/heart.svg" alt="image" height={16} width={16} />
            <span>Like</span>
          </button>
        </div>
      </div>

      <div className="h-[145px] w-[285px] bg-[#f4f5f7] bg-opacity-100 font-[Poppins]">
        <div className="h-[99px] w-[249px] relative top-4 left-4">
          <p className=" absolute top-0 font-semibold text-[24px] leading-[120%] text-[#3a3a3a]">
            {title}
          </p>
          <p className=" absolute top-[37px] font-medium text-[16px] leading-[150%] text-[#898989]">
            {name}
          </p>
          <span className=" absolute top-[69px] font-semibold text-[20px] leading-[150%] text-[#3a3a3a]">
            {rate}
          </span>
          <span className="absolute top-[69px] left-[147px] line-through font-normal text-[16px] leading-[150%] text-[#b0b0b0]">
            {previousrate}
          </span>
        </div>
      </div>
    </div>
  );
}
