import Image from "next/image";

import { todosdata } from "../todos";


type Cardprops = todosdata;

const Taskcard = ({ title, content, priority, deadline, time }: Cardprops) => {
  return (
    <div className="w-[256.75px] flex flex-col gap-[16px] rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[13px] border-[1px] bg-[#F9F9F9] border-[#DEDEDE]">
      <div className="flex flex-col gap-[13px]">
        <div className="flex flex-col gap-[12px]">
          <div className="font-medium text-[16px] text-[#606060]">{title}</div>
          <div className="text-[#797979] text-[14px] font-normal">
            {content}
          </div>
        </div>
        <div className="font-normal text-[12px] text-[#FFFFFF]">
          {priority == "Low" && (
            <div className="w-[40px] h-[27px] rounded-[8px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] bg-[#0ECC5A]">
              {priority}
            </div>
          )}
          {priority == "Medium" && (
            <div className="w-[62px] h-[27px] rounded-[8px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] bg-[#FFA235]">
              {priority}
            </div>
          )}
          {priority == "Urgent" && (
            <div className="w-[55px] h-[27px] rounded-[8px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] bg-[#FF6B6B]">
              {priority}
            </div>
          )}
        </div>
        <div className="w-[115px] h-[24px] flex gap-[8px] items-center">
          <Image src={"/time.svg"} alt="" height={24} width={24} />
          <div className="text-[#606060] text-[14px] font-semibold">
            {deadline}
          </div>
        </div>
      </div>
      <div className="font-normal text-[14px] text-[#797979]">{time}</div>
    </div>
  );
};

export default Taskcard;
