import Image from "next/image";
import Userinfo from "./head";
import { content } from "./sidebar-content";
import Sidebaritems from "./sidebar-items";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="h-full fixed border-r bg-background flex flex-col justify-between shadow-md pt-[24px] pr-[16px] pb-[32px] pl-[16px] gap-[16px]">
      <div>
        <div className="w-[253px] h-[79px] gap-[8px]">
          <Userinfo />
        </div>
        <div className="flex flex-col gap-[9px] mt-3">
          {content.map((item, idx) => (
            <Sidebaritems key={idx} image={item.image} content={item.content} />
          ))}
        </div>
        <Button
          className="text-[20px] text-[#FFFFFF] font-normal mt-2 hover:text-neutral-300"
          variant={"destructive"}
          size={"sm"}
        >
          Create new task{" "}
          <span className="ml-1">
            <Image src={"/plus.svg"} alt="" width={24} height={24} />
          </span>{" "}
        </Button>
      </div>

      <div className="w-[253px] h-[61px] flex gap-2 bg-[#F3F3F3]">
        <div className="h-[40px] w-[40] flex flex-col gap-1 mt-1 ml-1 items-center justify-center">
          <Image src={"/vector.svg"} alt="" height={20} width={11.67} />
          <Image src={"/line.svg"} alt="" height={1} width={20} />
        </div>
        <div className="h-[45] w-[189] gap-[4px] ml-2">
          <div className="font-medium text-[20px] text-[#666666]">
            Download the app
          </div>
          <div className="font-normal text-[14px] text-[#666666]">
            Get the full experience{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
