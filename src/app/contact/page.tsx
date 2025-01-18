import Footer from "../../components/footer";
import Features from "../../components/frame161";
import Herosection from "../../components/group78";
import Header from "../../components/header";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="h-[2365px] w-[1440] bg-white overflow-hidden">
      <div className="absolute top-0 bg-white">
        <Header />
      </div>

      <div className="bg-white overflow-hidden">
        <Herosection
          title="Contact"
          previous_page="Home"
          current_page="Contact"
          image="logo"
        />
      </div>

      <div className="h-[1144px] w-[1440px] absolute top-[416px] font-[Poppins] bg-white">
        <div>
          <div className="h-[52px] w-[375px] font-semibold text-[36px] leading-[54px] text-center text-black absolute top-[98px] left-[533px]">
            Get In Touch With Us
          </div>
          <div className="h-[48px] w-[644px] font-normal text-[16px] leading-[24px] text-center text-[#9f9f9f] absolute top-[159px] left-[398px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </div>
        </div>

        <div className="h-[923px] w-[1058px] absolute top-[289px] left-[191px] flex flex-col">
          <div className="h-[537px] w-[393px]  ">
            <div className="absolute top-0 left-[54px]">
              <div className="flex">
                <div className="relative top-0 ">
                  <Image
                    src="/location.png"
                    alt="icon"
                    height={27.59}
                    width={22}
                  />
                </div>
                <div className="absolute left-[52px]">
                  <p className="font-medium text-[24px] leading-[36px] text-black absolute top-0 ">
                    Address
                  </p>
                  <div className="h-[72px] w-[212px] font-normal text-[16px] leading-[24px] text-black absolute top-[36px]">
                    236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                    States
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-[153px] left-[54px]">
              <div className="flex">
                <div className="relative top-0">
                  <Image
                    src="/phone.png"
                    alt="icon"
                    height={27.59}
                    width={22}
                  />
                </div>
                <div className="absolute left-[52px]">
                  <p className="font-medium text-[24px] leading-[36px] text-black absolute top-0">
                    Phone
                  </p>
                  <div className="h-[48px] w-[212px] font-normal text-[16px] leading-[24px] text-black absolute top-[35px]">
                    Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-[282px] left-[54px]">
              <div className="flex">
                <div className="relative top-0">
                  <Image
                    src="/clock.png"
                    alt="icon"
                    height={27.59}
                    width={22}
                  />
                </div>
                <div className="absolute left-[52px]">
                  <div className="h-[36px] w-[166px] font-medium text-[24px] leading-[36px] text-black absolute top-0">
                    Working Time
                  </div>
                  <div className="h-[96px] w-[212px] font-normal text-[16px] leading-[24px] text-black absolute top-[35px]">
                    Monday-Friday: 9:00 - <br /> 22:00 <br /> Saturday-Sunday:
                    9:00 - <br /> 21:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[923px] w-[635px] absolute top-0 left-[476px]">
            <div className="h-[741px] w-[531px] absolute top-[0px] left-[52px]">
              <div className="h-[637px] w-[531px] flex flex-col justify-between">
                <div className="h-[121px] w-[530px] flex flex-col justify-between">
                  <p className="font-medium text-[16px] leading-[24px]">
                    Your name{" "}
                  </p>
                  <input
                    type="text"
                    placeholder="Abc"
                    className="h-[75px] w-[529px] pl-[30px] border-[1px] rounded-[10px] border-[#9f9f9f]"
                  />
                </div>

                <div className="h-[121px] w-[530px] flex flex-col justify-between">
                  <p className="font-medium text-[16px] leading-[24px]">
                    Email address{" "}
                  </p>
                  <input
                    type="text"
                    placeholder="Abc@def.com"
                    className="h-[75px] w-[529px] pl-[30px] border-[1px] rounded-[10px] border-[#9f9f9f]"
                  />
                </div>

                <div className="h-[121px] w-[530px] flex flex-col justify-between">
                  <p className="font-medium text-[16px] leading-[24px]">
                    Subject
                  </p>
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="h-[75px] w-[529px] pl-[30px] border-[1px] rounded-[10px] border-[#9f9f9f]"
                  />
                </div>

                <div className="h-[121px] w-[530px] flex flex-col justify-between">
                  <p className="font-medium text-[16px] leading-[24px]">
                    Message
                  </p>
                  <input
                    type="text"
                    placeholder="Hi! i’d like to ask about"
                    className="h-[120px] w-[527px] pl-[30px] border-[1px] rounded-[10px] border-[#9f9f9f]"
                  />
                </div>
              </div>

              <div className="h-[104px] w-[531px] absolute top-[699px]">
                <button className="h-[55px] w-[237px] bg-color1 text-white text-[16px] leading-[24px] font-normal">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[1560px] bg-white">
        <Features />
      </div>

      <div className="absolute top-[1860px] bg-white">
        <Footer />
      </div>
    </div>
  );
}
