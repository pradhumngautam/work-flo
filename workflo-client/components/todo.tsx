import Image from "next/image";
import { todos } from "./todos";
import Taskcard from "./ui/task-card";
import Addnew from "./ui/add-new";

const Todo = () => {
  return (
    <div className=" flex flex-col gap-[16px]">
      <div className="h-[24px] flex justify-between ">
        <div className="font-normal text-[20px] text-[#555555]">To do</div>
        <Image src={"/todo.svg"} alt="" height={24} width={24} />
      </div>
      <div>
        {todos.map((item, idx) => (
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

export default Todo;
