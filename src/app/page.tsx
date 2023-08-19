import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const res = await fetch(`${process.env.BASE_URL}/recommends/images`);
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
      <section id="order" className="flex w-full text-slate-50">
        <Link className="flex justify-center gap-5 w-full p-4 buttonPrimary" href="/order/login?type=togo">
          <Image src="/togo.png" alt="TO GO" width={48} height={48} />
          <span className="text-3xl py-2">TO GO</span>
        </Link>
        <Link className="flex justify-center gap-5 w-full p-4 buttonSecondary" href="/order/login?type=forhere">
          <Image src="/forhere.png" alt="forhere" width={48} height={48} />
          <span className="text-3xl py-2">FOR HERE</span>
        </Link>
      </section>
    </main>
  );
}
