import Image from "next/image";
import { tagcontent } from "./tag-content";
import Tagcard from "./tag-card";
import { Button } from "./ui/button";

const Tags = () => {
  return (
    <div className="w-[1107px] h-[253px] flex flex-col gap-[16px]">
      <div className="w-full h-[58px] flex justify-between">
        <div className="font-semibold text-[48px] text-[#080808] font-[barlow] leading-10">
          Good morning, Joe!
        </div>
        <div className="flex gap-1 items-center">
          <div className="font-normal text-[16px] text-[#080808]">
            Help & feedback{" "}
          </div>{" "}
          <div>
            <Image src={"/question.svg"} alt="" height={24} width={24} />
          </div>
        </div>
      </div>
      <div className="h-[123px] gap-[8px] flex flex-row ">
        {tagcontent.map((item, idx) => (
          <Tagcard
            key={idx}
            src={item.src}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="w-[1107px] h-[40px] flex justify-between">
        <div className="w-[196px] h-[40px] flex justify-between rounded-[8px] border-[1px] bg-[#FFFFFF] border-[#E9E9E9] p-[8px] ">
          <div className="font-normal text-[16px] text-[#797979]">Search</div>
          <div>
            <Image src={"/search.svg"} alt="" height={24} width={24} />
          </div>
        </div>
        <div className="w-[693px] h-[40px] flex gap-[16px] text-[#797979] font-normal text-[16px]">
          <div className="w-[162px] rounded-[4px] p-[8px] bg-[#F4F4F4] flex gap-[14px]">
            <div>Calendar view</div>
            <div>
              <Image src={"/calendar.svg"} alt="" height={24} width={24} />
            </div>
          </div>
          <div className="w-[141px] rounded-[4px] p-[8px] bg-[#F4F4F4] flex gap-[14px]">
            <div>Automation</div>
                      <div>
                      <Image src={"/automation.svg"} alt="" height={24} width={24} />
            </div>
          </div>
          <div className="w-[92px] rounded-[4px] p-[8px] bg-[#F4F4F4] flex gap-[14px]">
            <div>Filter</div>
            <div><Image src={"/filter.svg"} alt="" height={24} width={24} /></div>
          </div>
          <div className="w-[98px] rounded-[4px] p-[8px] bg-[#F4F4F4] flex gap-[14px]">
            <div>Share</div>
            <div><Image src={"/share.svg"} alt="" height={24} width={24} /></div>
          </div>
          <Button className="font-medium text-[16px] text-[#FFFFFF]" variant={"outline"} size={"lg"}>Create new <span className="ml-1"><Image src={"/plus.svg"} alt="" height={24} width={24} /></span></Button>
        </div>
      </div>
    </div>
  );
};

export default Tags;
