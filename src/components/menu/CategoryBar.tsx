// Assets
import { GrPrevious, GrNext } from "react-icons/gr";

const CategoryBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="py-4 px-2 border border-gray-400">
        <GrPrevious className="text-2xl text-[#7A7A7A]" />
      </div>
      <div className="border border-gray-400 w-full h-full"></div>
      <div className="py-4 px-2 border border-gray-400">
        <GrNext className="text-2xl text-[#7A7A7A]" />
      </div>
    </div>
  );
};
export default CategoryBar;
