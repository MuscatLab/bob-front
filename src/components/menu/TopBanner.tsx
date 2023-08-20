const TopBanner = () => {
  return (
    <div className="w-full h-1/6 flex-shrink-0 bg-gradient-to-r from-red-700 to-black flex items-center pl-3 justify-between">
      <div className="px-4">
        <p
          className="text-3xl text-white"
          style={{ textShadow: "0px 8px 15px rgba(0, 0, 0, 0.70)" }}
        >
          Emm...
        </p>
        <div className="flex items-center">
          <span
            className="text-white text-4xl font-normal"
            style={{ textShadow: "0px 8px 15px rgba(0, 0, 0, 0.70)" }}
          >
            What&#39;s up,
          </span>
          <span
            className="text-[#ff4707] text text-5xl font-normal pl-4"
            style={{ textShadow: "0px 8px 15px rgba(0, 0, 0, 0.70)" }}
          >
            BoB
          </span>
          <span
            className="text-4xl text-white"
            style={{ textShadow: "0px 8px 15px rgba(0, 0, 0, 0.70)" }}
          >
            ?
          </span>
        </div>
      </div>
      <img src="/CupRice.png" className="w-[9.9rem]" />
    </div>
  );
};

export default TopBanner;
