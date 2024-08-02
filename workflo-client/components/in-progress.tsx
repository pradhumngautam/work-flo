import Image from "next/image";
import Addnew from "./ui/add-new";
import { progress } from "./progress-tasks";
import Taskcard from "./ui/task-card";

const Inprogress = () => {
  return (
    <div className=" flex flex-col gap-[16px]">
      <div className="h-[24px] flex justify-between ">
        <div className="font-normal text-[20px] text-[#555555]">
          In progress
        </div>
        <Image src={"/todo.svg"} alt="" height={24} width={24} />
      </div>
      <div className="flex flex-col gap-[16px]">
        {progress.map((item, idx) => (
          <Taskcard
            key={idx}
            title={item.title}
            content={item.content}
            priority={item.priority as "Low" | "Medium" | "Urgent" | undefined}
            time={item.time}
            deadline={item.deadline}
          />
        ))}
      </div>
      <Addnew />
    </div>
  );
};

export default Inprogress;
