import ChooseOrderType from "@/components/main/ChooseOrderType";
import Image from "next/image";

export default async function Home() {
  
  const res = await fetch("http://api.muscatlab.com/recommends/images");
  const adImg = await res.json();

  return (
    <main className="w-[550px] flex flex-col items-center justify-between min-h-screen">
      <section id="advertisement" className="w-full h-full">
        <Image
          width={640}
          height={1000}
          style={{ width: "auto", height: "100%" }}
          src={adImg[0].url}
          alt="Promote Image"
        />
      </section>
      <ChooseOrderType />
    </main>
  );
}
