import Finished from "./finished";
import Inprogress from "./in-progress";
import Todo from "./todo";
import Underreview from "./under-review";

const Tasks = () => {
  return (
    <div className="w-[1107px] rounded-[8px] p-[16px] flex flex-row gap-[16px] bg-[#FFFFFF] mt-4">
      <div className="w-[256.75px]">
        <Todo />
      </div>
      <div className="w-[256.75px]">
        <Inprogress />
      </div>
      <div className="w-[256.75px]">
        <Underreview />
      </div>
      <div className="w-[256.75px]">
        <Finished />
      </div>
    </div>
  );
};

export default Tasks;
