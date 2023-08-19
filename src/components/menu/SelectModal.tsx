import { useEffect, useState } from "react";
import { BsFillSkipBackwardCircleFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

const SelectModal = ({
  data,
  cart,
  setCart,
  isSelected,
  setIsSelected,
  modalOpen,
  setModalOpen,
}: any) => {
  const [spiciness, setSpiciness] = useState(data.options[0].max_step);
  const [saltiness, setSaltiness] = useState(data.options[1].max_step);
  const [sweetness, setSweetness] = useState(data.options[2].max_step);
  const [sourness, setSourness] = useState(data.options[3].max_step);

  const [checking, setChecking] = useState(false);

  const incrementAndReset = (value: any, setter: any) => {
    setter((prevValue: number) => (prevValue >= 10 ? 1 : prevValue + 1));
  };

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-10">
      {!checking ? (
        <div className="flex h-[26rem] w-[32rem] border bg-white shadow-lg flex-col">
          <div className="w-full h-16 flex flex-row border justify-between items-center">
            <div className="w-1/5 flex justify-center">
              <FaWindowClose
                className="text-[#461B1B] text-2xl"
                onClick={() => {
                  setCart();
                  setModalOpen(false);
                }}
              />
            </div>
            <div className="w-3/5 flex justify-center">
              <p className="text-[#461B1B] text-2xl">Change Taste</p>
            </div>
            <div className="w-1/5" />
          </div>
          <div className="w-full h-16 flex flex-row border justify-center items-center">
            <p className="text-[#461B1B] text-lg mx-1">Back to the menu</p>
            <BsFillSkipBackwardCircleFill className="text-[#461B1B] text-xl mx-1" />
          </div>
          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
              <div
                className="w-8 h-8 bg-[#FFE9E9] flex justify-center items-center"
                onClick={() => incrementAndReset(spiciness, setSpiciness)}
              >
                <span>{spiciness}</span>
              </div>
              <span>Spiciness</span>
            </div>
            <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
              <div
                className="w-8 h-8 bg-[#C7F6FE] flex justify-center items-center"
                onClick={() => incrementAndReset(saltiness, setSaltiness)}
              >
                <span>{saltiness}</span>
              </div>
              <span>Saltiness</span>
            </div>
            <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
              <div
                className="w-8 h-8 bg-[#D8FEC8] flex justify-center items-center"
                onClick={() => incrementAndReset(sweetness, setSweetness)}
              >
                <span>{sweetness}</span>
              </div>
              <span>Sweetness</span>
            </div>
            <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
              <div
                className="w-8 h-8 bg-[#FEF9C7] flex justify-center items-center"
                onClick={() => incrementAndReset(sourness, setSourness)}
              >
                <span>{sourness}</span>
              </div>
              <span>Sourness</span>
            </div>
          </div>
          <div className="h-16 bg-[#FF4707] flex justify-center items-center">
            <p
              className="text-white text-2xl"
              onClick={() => {
                setChecking(true);
              }}
            >
              Apply
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-[32rem] w-[32rem] border bg-white shadow-lg flex-col">
          <div className="w-full h-16 flex flex-row border justify-between items-center">
            <div className="w-1/5 flex justify-center">
              <FaWindowClose
                className="text-[#461B1B] text-2xl"
                onClick={() => {
                  setSpiciness(data.options[0].max_step);
                  setSaltiness(data.options[1].max_step);
                  setSweetness(data.options[2].max_step);
                  setSourness(data.options[3].max_step);
                  setModalOpen(false);
                  setChecking(false);
                }}
              />
            </div>
            <div className="w-3/5 flex justify-center">
              <p className="text-[#461B1B] text-2xl">Purchase</p>
            </div>
            <div className="w-1/5" />
          </div>
          <div className="flex-grow ">
            <div className="w-full h-1/2 flex flex-row p-6">
              <img src={data.image_url} className="w-24 h-24" />
              <div className="flex flex-col items-center">
                <p className="py-2">{data.name}</p>
                <div className="h-20 grid grid-cols-2 gap-4">
                  <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                    <span>Spiciness</span>
                    <span>{spiciness}</span>
                  </div>
                  <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                    <span>Saltiness</span>
                    <span>{saltiness}</span>
                  </div>
                  <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                    <span>Sweetness</span>
                    <span>{sweetness}</span>
                  </div>
                  <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                    <span>Sourness</span>
                    <span>{sourness}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center p-10 text-[#FF4707] text-5xl">
            <span className="mr-14">Total:</span>
            <span>₩ {data.price}</span>
          </div>
          <div className="h-16 bg-[#FF4707] flex justify-center items-center">
            <p
              className="text-white text-2xl"
              onClick={() => {
                setCart({
                  menus: {
                    name: data.name,
                    options: [
                      {
                        name: "Spiciness",
                        step: spiciness,
                      },
                      {
                        name: "Saltiness",
                        step: saltiness,
                      },
                      {
                        name: "Sweetness",
                        step: sweetness,
                      },
                      {
                        name: "Sourness",
                        step: sourness,
                      },
                    ],
                  },
                });
                setIsSelected(true);
                setModalOpen(false);
              }}
            >
              Put it into My Cart
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectModal;
