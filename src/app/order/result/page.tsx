// Components

const Result = ({ searchParams} : { searchParams: { ticket: string, dnow: string, tdpoint: string, mode: string}}) => {
  const orderNumber = searchParams["ticket"] ?? 777;
  const donated = searchParams["dnow"] ?? 5000;
  const donationPoint = searchParams["tdpoint"] ?? 102049;
  const mode = searchParams["mode"] ?? "donation";

  return (
    <div className="flex bg-black justify-center items-center w-screen h-screen">
      <div className="w-[550px] h-full bg-white text-black flex flex-col">
        <section id="order" className="bg-white h-full mx-4">
          <h1 className="text-5xl mt-60">
            Thank You<span className="text-4xl block">for Purchasing!</span>
          </h1>
          <p className="text-4xl mt-8">
            Your order No. is
            <br />
            <span className="text-6xl textSecondary text-[#F75E28]">
              {orderNumber}
            </span>
            .
          </p>
        </section>
        <section id="donate" className="bg-[#003D23] h-full pt-20 px-4">
          <h1 className="text-3xl text-white">
            You {mode === "saveup" ? "earned" : "donated"}
            <br />
            <span className="text-6xl text-[#D0FFA1]">
              {Number(donated).toLocaleString("en-US")}pt(s)
            </span>
          </h1>
          <p className="mt-6 text-xl text-white">
            Your {mode === "saveup" ? "current" : "donation"} point is
            <br />
            <span className="text-[#D0FFA1]">
              {Number(donationPoint).toLocaleString("en-US")}pt(s)
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};
export default Result;

export const runtime = "edge";
