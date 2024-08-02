import { User } from "lucide-react";
import Image from "next/image";

const Userinfo = () => {
    return (
        <div className=" flex flex-col gap-[8px]">
            <div className="flex gap-2 items-center">
                <Image src= {"/me.svg"} alt="" height={31} width={31} className="rounded-[8px]"/>
                <div className="font-normal text-[20px] ">Joe Gardener</div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-[20px]">
                    <Image src={"/icon1.svg"} alt="" width={24} height={24} />
                    <Image src={"/icon2.svg"} alt="" width={24} height={24} />
                    <Image src={"/icon3.svg"} alt="" width={24} height={24} />
                </div>
                <div className="bg-[#F4F4F4] w-[69px] h-[40px] rounded-[4px] p-[8px] font-normal text-[16px] text-[#797979]">Logout</div>
            </div>
            
          
        </div>
    );
}
 
export default Userinfo;