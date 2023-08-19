// Components
import { useState } from "react";

const Result = () => {
  const orderNumber = 777;
  const donated = 4500;
  const donationPoint = 1004520;

  return (
    <div className="flex bg-black justify-center items-center w-screen h-screen">
      <div className="w-[550px] h-full bg-white text-[#461B1B] flex flex-col">
        <section id="order" className="bg-white h-full mx-4">
            <h1 className="text-4xl mt-60">
            Thank You<span className="text-3xl block">for Purchasing!</span>
            </h1>
            <p className="text-3xl mt-8">
            Your order No. is<br />
            <span className="text-6xl textSecondary">{orderNumber}</span>.
            </p>
        </section>
        <section id="donate" className="bg-[#461B1B] h-full pt-20 px-4">
            <h1 className="text-3xl text-white">
                You donated<br />
                <span className="text-6xl text-[#FFB9A1]">{donated.toLocaleString("en-US")}pt(s)</span>
            </h1>
            <p className="mt-6 text-xl text-white">
                Your donation point is<br />
                <span className="text-[#FFB9A1]">{donationPoint.toLocaleString("en-US")}pt(s)</span>
            </p>
        </section>
      </div>
    </div>
  );
};
export default Result;
