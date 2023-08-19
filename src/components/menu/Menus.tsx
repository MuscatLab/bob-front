"use client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
// Api
import { getAllMenu } from "@/api/MenuApi";
import SelectModal from "./SelectModal";

const Menus = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMenu();
      setMenus(data);
    };
    getData();
  }, []);

  return (
    <div className="w-full h-full flex-grow overflow-auto">
      <div className="flex-grow h-3/4">
        {menus.map((m) => (
          <div
            key={m.id}
            className="p-4 flex flex-col justify-center w-40 items-center"
          >
            <img
              src={m.image_url}
              className="w-20"
              onClick={() => {
                setModalOpen(true);
              }}
            />
            <p>{m.name}</p>
            <p className="text-[#FF4707]">₩{m.price}</p>
            {modalOpen && (
              <SelectModal
                data={m}
                cart={cart}
                setCart={setCart}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            )}
          </div>
        ))}
      </div>
      {isSelected && (
        <div className="w-full h-1/4 bg-[#FFF3B3] border-t-4 border-[#FF4707] border-dashed">
          <p className="py-2 px-4 text-lg">Cart</p>
          <div className="p-2">
            <p>{cart.menus.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
