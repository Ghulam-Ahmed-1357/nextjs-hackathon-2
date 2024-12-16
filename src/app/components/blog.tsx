import Image from "next/image";
export default function Post({ src = "", title = "", description = "" }) {
  return (
    <div className="h-[794px] w-[820px] absolute left-[3px] font-[Poppins]">
      <Image
        src={src}
        alt="image"
        height={500}
        width={817}
        className="rounded-[10px]"
      />
      <div className="h-[24px] w-[349px] absolute top-[521px] flex justify-between text-[16px] font-normal leading-[24px] text-[#9f9f9f]">
        <div className="h-[24px] w-[80px] flex justify-between">
          <Image src="/admin.svg" alt="icon" height={20} width={20} />
          <p>Admin</p>
        </div>
        <div className="h-[24px] w-[121px] flex justify-between">
          <Image src="/calender.svg" alt="icon" height={20} width={20} />
          <p>14 Oct 2022</p>
        </div>
        <div className="h-[24px] w-[78px] flex justify-between">
          <Image src="/tag.svg" alt="icon" height={20} width={20} />
          <p>Wood</p>
        </div>
      </div>
      <div className="h-[45px] w-[517px] absolute top-[556px] text-[30px] font-medium leading-[45px] text-black">
        {title}
      </div>
      <div className="h-[115px] w-[817px] absolute top-[613px] text-[16px] font-normal leading-[24px] text-[#9f9f9f]">
        {description}
      </div>
      <button className="absolute top-[758px] text-[16px] font-normal leading-[24px] text-[#9f9f9f]">
        Read more
      </button>
      <div className="w-[77px] absolute top-[794px] border-b-[1px] border-black "></div>
    </div>
  );
}
