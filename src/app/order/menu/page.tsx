// Components
import TopBanner from "@/components/menu/TopBanner";
import CategoryBar from "@/components/menu/CategoryBar";
import ChoiceBtn from "@/components/menu/ChoiceBtn";
import ExtraBtn from "@/components/menu/ExtraBtn";

const Menu = () => {
  return (
    <div className="flex bg-black justify-center items-center w-screen h-screen">
      <div className="w-[600px] h-screen bg-white">
        <TopBanner />
        <div className="w-full h-5/6 flex flex-col">
          <CategoryBar />
          <div className="w-full h-full flex-grow">내용</div>
          <ChoiceBtn />
          <ExtraBtn />
        </div>
      </div>
    </div>
  );
};
export default Menu;
