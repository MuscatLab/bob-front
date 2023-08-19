"use client";
import { useEffect, useState } from "react";
// Api
import SelectModal from "./SelectModal";

const Menus = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [recommendMenu, setMenuBright] = useState<String[]>([]);
  const [recommendTaste, setRecTaste] = useState<{
    [key: string]: string | Number | Object[] | Object;
  }>();

  useEffect(() => {
    const getData = async () => {
      setMenus(await fetch("/api/getAllMenu").then((res) => res.json()));
    };

    getData();
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log(id);
    const recommendData = async () => {
      const orderedMenu = await fetch(`/api/recommend?id=${id}`).then((res) =>
        res.json()
      );
      console.log(orderedMenu);
      const taste: { [key: string]: Object } = {};
      const recommend = [];

      for (let i = 0; i < orderedMenu.length; i++) {
        recommend.push(orderedMenu[i].name);

        taste[orderedMenu[i].name] = {
          quantity: orderedMenu[i].quantity,
          tastes: orderedMenu[i].tastes,
        };
      }
      setRecTaste(taste);
      setMenuBright(recommend);
    };
    recommendData();
  }, []);

  return (
    <div className="w-full h-full flex-grow overflow-auto">
      <div className="flex-grow h-3/4">
        {menus.map((m) => (
          <div
            key={m.id}
            className={`${recommendMenu.includes(m.name) ? "recommend " : ""}
              p-4 m-4 flex flex-col justify-center w-40 items-center`}
          >
            <img
              src={m.image_url}
              className="w-20"
              onClick={() => {
                setModalOpen(true);
              }}
            />
            <p>{m.name}</p>
            <p className="text-[#FF4707]">
              ₩{m.price}
              <span className="text-[#7A7A7A]">{m.expected_time} min.</span>
            </p>
            {modalOpen && (
              <SelectModal
                data={m}
                recommend={recommendTaste && recommendTaste[m.name]}
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
          <p className="py-2 px-4 text-lg">
            Cart
            <span className="rounded-xl buttonSecondary text-white px-6">
              1
            </span>
          </p>
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
