"use client";
import { useEffect, useState } from "react";
// Api
import SelectModal from "./SelectModal";

const Menus = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [menu, setMenu] = useState({ name: "" });
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
    const recommendData = async () => {
      const orderedMenu = await fetch(`/api/recommend?id=${id}`).then((res) =>
        res.json()
      );
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
      <div className="flex-grow h-3/4 w-full overflow-wrap grid grid-cols-3 py-2 px-4">
        {menus.map((m) => (
          <div
            key={m.id}
            className={`${recommendMenu.includes(m.name) && "recommend"}
              p-2 flex flex-col justify-around w-40 items-center`}
          >
            <img
              src={m.image_url}
              className="w-30 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setMenu(m);
              }}
            />
            <div>
              <p className="text-black">{m.name}</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#FF4707]">₩ {m.price}</p>
                <span className="text-[#7A7A7A]">{m.expected_time}min.</span>
              </div>
            </div>
          </div>
        ))}
        {modalOpen && (
          <SelectModal
            data={menu}
            recommend={recommendTaste && recommendTaste[menu.name]}
            cart={cart}
            setCart={setCart}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      {isSelected && (
        <div className="w-full h-1/4 bg-[#FFF3B3] border-t-4 border-[#FF4707] border-dashed">
          <p className="py-2 px-4 text-lg">
            Cart
            <span className="rounded-xl buttonSecondary text-white px-6 ml-2">
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
