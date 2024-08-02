import Image from "next/image";

const Addnew = () => {
  return (
    <div className="w-[256.75px] h-[40px] rounded-[8px] flex justify-between p-[8px] bg-gradient-to-b from-[#3A3A3A] to-[#202020] ">
      <div className="font-normal text-[16px] text-[#E3E1E1]">Add new</div>
      <Image src={"/add.svg"} alt="" height={24} width={24} />
    </div>
  );
};

export default Addnew;
