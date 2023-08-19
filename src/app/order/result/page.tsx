// Components
import { useState } from "react";

const Result = () => {
  const orderNumber = 777;
  const status = "In Progress of Making a burger";
  const remaining = "00:00";
  const history = [{
    index: 0,
    status: "Being ordered from kiosk",
    time: "2023-08-19 14:38:19"
  },
  {
    index: 1,
    status: "Baking a bun",
    time: "2023-08-19 14:41:20"
  }
  ]

  return (
    <div className="flex bg-black justify-center items-center w-screen h-screen">
      <div className="w-[550px] h-screen bg-white px-4 text-[#461B1B]">
        <h1 className="text-3xl my-6 text-center">
          Meal Preparation
        </h1>
        <hr className="border-2 mb-6" />
        <p className="text-2xl">
          Order No.<span className="text-6xl textSecondary">{orderNumber}</span>
        </p>
        <p className="text-2xl">
          Status:<br />
          {status}
        </p>

        <section id="timer" className="my-8">
          <h2 className="text-2xl">Remaining Time(min:sec):</h2>
          <p className="textSecondary text-6xl text-center my-4">{remaining}</p>
        </section>
        <section id="history">
          <h2 className="text-2xl">Status History</h2>
          <div className="grid grid-cols-2 gap-4 border-b-2 mt-4">
            <p>Status</p>
            <p>Processing time</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {
              history.map((stat) => (
                <>
                  <p key={stat.index}>
                    {stat.status}
                  </p>
                  <p>
                    {stat.time}
                  </p>
                </>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
};
export default Result;
