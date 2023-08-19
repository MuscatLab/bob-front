"use client";
// Components
import TopBanner from "@/components/menu/TopBanner";
// import CategoryBar from "@/components/menu/CategoryBar";
import ChoiceBtn from "@/components/menu/ChoiceBtn";
import ExtraBtn from "@/components/menu/ExtraBtn";
import Menus from "@/components/menu/Menus";
import { useState } from "react";

const Menu = () => {
  const [cart, setCart] = useState({
    menus: {
      name: "string",
      options: [
        {
          name: "string",
          step: 0,
        },
        {
          name: "string",
          step: 0,
        },
        {
          name: "string",
          step: 0,
        },
        {
          name: "string",
          step: 0,
        },
      ],
    },
  });
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex bg-black justify-center items-center w-screen h-screen">
      <div className="w-[600px] h-screen bg-white">
        <TopBanner />
        <div className="w-full h-5/6 flex flex-col">
          {/* <CategoryBar /> */}
          <Menus
            cart={cart}
            setCart={setCart}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
          <ChoiceBtn
            cart={cart}
            setCart={setCart}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
          <ExtraBtn />
        </div>
      </div>
    </div>
  );
};
export default Menu;
