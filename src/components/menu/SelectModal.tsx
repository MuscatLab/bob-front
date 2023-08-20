import { useState } from "react";
// Assets
import { BsFillSkipBackwardCircleFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { PiPottedPlantLight } from "react-icons/pi";

import "../../app/globals.css";

const SelectModal = ({
  data,
  recommend,
  cart,
  setCart,
  isSelected,
  setIsSelected,
  modalOpen,
  setModalOpen,
}: any) => {
  const [checking, setChecking] = useState(false);

  const [portion, setPortion] = useState(recommend ? recommend.quantity : 50);
  const [isChecked, setIsChecked] = useState(false);

  const [spiciness, setSpiciness] = useState(
    data.tastes.length >= 0 ? data.tastes[0].steps.length - 1 : undefined
  );
  const [saltiness, setSaltiness] = useState(
    data.tastes.length > 1 ? data.tastes[1].steps.length - 1 : undefined
  );
  const [sweetness, setSweetness] = useState(
    data.tastes.length > 2 ? data.tastes[2].steps.length - 1 : undefined
  );
  const [sourness, setSourness] = useState(
    data.tastes.length > 3 ? data.tastes[3].steps.length - 1 : undefined
  );

  const incrementAndReset = (value: any, setter: any) => {
    setter((prevValue: number) => (prevValue >= 10 ? 1 : prevValue + 1));
  };

  const recommendTastes: RecommendTaste = {};
  recommend &&
    recommend.tastes.forEach((taste: Taste) => {
      switch (taste.name) {
        case "짠맛":
          recommendTastes.spiciness = taste.step;
          break;
        case "감칠맛":
          recommendTastes.spiciness = taste.step;
          break;
        case "신맛":
          recommendTastes.sourness = taste.step;
          break;
        case "단맛":
          recommendTastes.sweetness = taste.step;
          break;
      }
    });

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-10 bg-blue-400">
      {!checking ? (
        <div className="flex h-[32rem] w-[32rem] border bg-white shadow-lg flex-col">
          <div className="w-full h-16 flex flex-row border justify-between items-center">
            <div className="w-1/5 flex justify-center">
              <FaWindowClose
                className="text-[#461B1B] text-2xl cursor-pointer"
                onClick={() => {
                  setCart();
                  setModalOpen(false);
                }}
              />
            </div>
            <div className="w-3/5 flex justify-center">
              <p className="text-[#461B1B] text-2xl">Change Options</p>
            </div>
            <div className="w-1/5" />
          </div>
          <div className="w-full h-16 flex flex-row border justify-center items-center">
            <p className="text-[#461B1B] text-lg mx-1">Back to the menu</p>
            <BsFillSkipBackwardCircleFill className="text-[#461B1B] text-xl mx-1" />
          </div>
          <section
            id="changeTaste"
            className="flex flex-col justify-center flex-grow"
          >
            <p className="text-[#461B1B] text-2xl text-center mt-2">
              Change Taste
            </p>
            <div className="flex-grow grid grid-cols-2 gap-4">
              {spiciness && (
                <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
                  <div
                    className="w-8 h-8 bg-[#FFE9E9] flex justify-center items-center cursor-pointer"
                    onClick={() => incrementAndReset(spiciness, setSpiciness)}
                  >
                    <span>{spiciness}</span>
                  </div>
                  <div>
                    <span>Spiciness</span>
                    <div className="text-xs">
                      <span>Recommended: </span>
                      <span className="text-[#FF4707]">
                        {recommendTastes
                          ? recommendTastes.spiciness
                            ? recommendTastes.spiciness.toString()
                            : "??"
                          : "??"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {saltiness && (
                <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
                  <div
                    className="w-8 h-8 bg-[#C7F6FE] flex justify-center items-center cursor-pointer"
                    onClick={() => incrementAndReset(saltiness, setSaltiness)}
                  >
                    <span>{saltiness}</span>
                  </div>
                  <div>
                    <span>Saltiness</span>
                    <div className="text-xs">
                      <span>Recommended: </span>
                      <span className="text-[#FF4707]">
                        {recommendTastes
                          ? recommendTastes.saltiness
                            ? recommendTastes.saltiness.toString()
                            : "??"
                          : "??"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {sweetness && (
                <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
                  <div
                    className="w-8 h-8 bg-[#D8FEC8] flex justify-center items-center cursor-pointer"
                    onClick={() => incrementAndReset(sweetness, setSweetness)}
                  >
                    <span>{sweetness}</span>
                  </div>
                  <div>
                    <span>Sweetness</span>
                    <div className="text-xs">
                      <span>Recommended: </span>
                      <span className="text-[#FF4707]">
                        {recommendTastes && recommendTastes.sweetness
                          ? recommendTastes.sweetness.toString()
                          : "??"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {sourness ? (
                <div className="px-8 flex justify-around items-center text-lg text-[#461B1B]">
                  <div
                    className="w-8 h-8 bg-[#FEF9C7] flex justify-center items-center cursor-pointer"
                    onClick={() => incrementAndReset(sourness, setSourness)}
                  >
                    <span>{sourness}</span>
                  </div>
                  <div>
                    <span>Sourness</span>
                    <div className="text-xs">
                      <span>Recommended: </span>
                      <span className="text-[#FF4707]">
                        {recommendTastes && recommendTastes.sourness
                          ? recommendTastes.sourness.toString()
                          : "??"}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          <div className="px-6 py-2 h-[8rem] border-t-2 flex flex-col justify-center items-center">
            <p className="text-[#461B1B] text-2xl">Adjust Portion</p>
            <div className="w-4/5 flex justify-between">
              <div className="text-gray-600 text-sm">50</div>
              <div className="text-gray-600 text-sm">100</div>
            </div>
            <label
              htmlFor="steps-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />
            <input
              id="steps-range"
              type="range"
              min="50"
              max="100"
              value={portion}
              step="10"
              onChange={(e) => {
                setPortion(Number(e.target.value));
              }}
              className="w-4/5 h-4 bg-[#7A7A7A] rounded-full appearance-none cursor-pointer"
            />
          </div>
          <div className="h-16 bg-[#FF4707] flex justify-center items-center">
            <p
              className="text-white text-2xl cursor-pointer"
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
                className="text-[#461B1B] text-2xl cursor-pointer"
                onClick={() => {
                  switch (data.tastes.length) {
                    case 4:
                      setSourness(data.tastes[3].steps.length - 1);
                    case 3:
                      setSweetness(data.tastes[2].steps.length - 1);
                    case 2:
                      setSaltiness(data.tastes[1].steps.length - 1);
                    case 1:
                      setSpiciness(data.tastes[0].steps.length - 1);
                  }
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
              <img src={data.image_url} className="h-24" />
              <div className="flex flex-col items-center">
                <p className="py-2 text-[#461B1B]">{data.name}</p>
                <div className="h-20 grid grid-cols-2 gap-4">
                  {spiciness && (
                    <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                      <span>Spiciness</span>
                      <span>{spiciness}</span>
                    </div>
                  )}
                  {saltiness && (
                    <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                      <span>Saltiness</span>
                      <span>{saltiness}</span>
                    </div>
                  )}
                  {sweetness && (
                    <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                      <span>Sweetness</span>
                      <span>{sweetness}</span>
                    </div>
                  )}
                  {sourness && (
                    <div className="px-6 flex justify-around items-center text-md text-[#461B1B]">
                      <span>Sourness</span>
                      <span>{sourness}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center text-[#FF4707] text-5xl">
            <span className="mr-14">Total:</span>
            <span>₩ {data.price}</span>
          </div>
          <div className="flex flex-col justify-center items-end p-10 text-[#461B1B] text-2xl">
            <div>
              <div className="flex items-center mr-4">
                <input
                  checked={isChecked}
                  id="checkbox1"
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                  className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300 mr-2"
                >
                  {isChecked && (
                    <PiPottedPlantLight className="text-2xl bg-[#057042] text-white" />
                  )}
                </label>
                <p>Donate?</p>
              </div>
            </div>
            <p className="text-sm mt-2">Donated Points:</p>
            <div className="flex flex-row ">
              <p>
                {data.price} x {100 - Number(portion)}% ={" "}
              </p>
              <p className="text-[#057042] ml-2">
                {Math.floor(
                  Number(data.price) * ((100 - Number(portion)) / 100)
                )}{" "}
                pt(s).
              </p>
            </div>
          </div>
          <div className="h-16 bg-[#FF4707] flex justify-center items-center">
            <p
              className="text-white text-2xl cursor-pointer"
              onClick={() => {
                setCart({
                  menus: {
                    name: data.name,
                    quantity: portion,
                    price: data.price,
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
