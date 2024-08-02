import Image from "next/image";
import { contentdata } from "./sidebar-content";

type contentprops = contentdata;

const Sidebaritems = ({ image, content }: contentprops) => {
  return (
    <div className="flex w-[253px] items-center gap-[14px] hover:bg-[#DDDDDD]">
      <div>
        <Image src={image.src} alt="" height={24} width={24} />
      </div>
      <div className="font-normal text-[20px] text-[#797979] ">{content}</div>
    </div>
  );
};

export default Sidebaritems;
