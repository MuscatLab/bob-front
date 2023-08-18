// Assets
import { BsTicketPerforated } from "react-icons/bs";
import { BiExit } from "react-icons/bi";

const ExtraBtn = () => {
  return (
    <div className="w-full h-14 flex-shrink-0 bg-black flex flex-row justify-between items-center">
      <div className="flex flex-row items-center px-8">
        <div className="bg-white rounded-full mx-3 p-2">
          <BsTicketPerforated className="text-2xl text-black" />
        </div>
        <span className="text-2xl">Coupon</span>
      </div>
      <div className="flex flex-row items-center px-8">
        <div className="bg-white rounded-full mx-3 p-2">
          <BiExit className="text-2xl text-black" />
        </div>
        <span className="text-2xl">Exit</span>
      </div>
    </div>
  );
};

export default ExtraBtn;
