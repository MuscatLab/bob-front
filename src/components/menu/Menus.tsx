"use client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
// Api
import SelectModal from "./SelectModal";

const Menus = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setMenus(await fetch("/api/getAllMenu").then((res) => res.json()));
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
            <p className="text-[#FF4707]">₩{m.price} <span className="text-[#7A7A7A]">{m.expected_time} min.</span></p>
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
          <p className="py-2 px-4 text-lg">Cart <span className="rounded-xl buttonSecondary text-white px-6">1</span> </p>
          <div className="flex">
            <div className="p-2 mx-2 p-4 pe-6 bg-slate-50">
              <p>{cart.menus.name}</p>
              <p className="textSecondary text-xl">₩ {cart.menus.price}</p>
            </div>          
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
