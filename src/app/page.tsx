"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// Assets
import { PiBowlFoodFill } from "react-icons/pi";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adImg, setAdImg] = useState("");

  const [id, setId] = useState("ID");
  const [password, setPassword] = useState("Password");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchAdImage = async () => {
      const res = await fetch(`/api/getMainImg`);
      console.log(res.url);
      const img = await res.json();
      setAdImg(img[0].url);
    };

    fetchAdImage();
  }, []);

  const signIn = async () => {
    const res = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      localStorage.setItem("id", data.id);
      console.log(data.id);
      setIsLogin(true);
    } else {
      alert("로그인 정보를 다시 확인해주세요!");
    }
  };

  return (
    <main className="w-[550px] flex flex-col items-center justify-between min-h-screen bg-white">
      <section id="advertisement" className="w-full h-full">
        <Image
          width={320}
          height={500}
          style={{ width: "auto", height: "100%" }}
          src={adImg}
          alt="Promote Image"
        />
      </section>
      <section id="order" className="flex w-full text-slate-50">
        <div className="flex justify-center items-center gap-2 w-full p-4 buttonPrimary">
          <PiBowlFoodFill className="text-4xl" />
          <span
            className="text-3xl"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            ORDER
          </span>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-10">
          <div className="h-1/3 w-[20rem] bg-[#FFDEBF] rounded-2xl shadow-inner">
            {!isLogin ? (
              <div className="h-4/5 flex justify-center items-center flex-col">
                <p className="text-[#461B1B] text-center text-2xl mb-4">
                  Please log in
                </p>
                <div>
                  <div>
                    <div className="h-20 flex flex-col justify-between">
                      <div>
                        <input
                          type="text"
                          name="id"
                          value={id}
                          onChange={(e) => {
                            setId(e.target.value);
                          }}
                          className="w-[12rem] h-8 border-b-2 border-red-800 bg-red-400 bg-opacity-20 p-1 text-[#461B1B]"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          className="w-[12rem] h-8 border-b-2 border-red-800 bg-red-400 bg-opacity-20 p-1 text-[#461B1B]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-4/5 flex justify-center items-center flex-col text-2xl">
                <p className="text-[#461B1B]">Let me recommend</p>
                <p className="text-[#FF4707]">your favorite burger</p>
                <p className="text-[#461B1B]">with your history</p>
              </div>
            )}
            {!isLogin ? (
              <div className="h-1/5 w-full flex flex-row">
                <Link
                  href={"/order/menu"}
                  className="w-1/2 flex justify-center items-center bg-[#343434]"
                >
                  <span className="text-2xl">Guest</span>
                </Link>
                <div className="w-1/2 flex justify-center items-center bg-[#FF4707]">
                  <span
                    className="text-2xl"
                    onClick={() => {
                      signIn();
                      setId("ID");
                      setPassword("Password");
                    }}
                  >
                    Apply
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-1/5 w-full flex flex-row">
                <div className="w-1/2 flex justify-center items-center bg-[#343434]">
                  <span
                    className="text-2xl"
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsLogin(false);
                      localStorage.setItem("id", "");
                    }}
                  >
                    Decline
                  </span>
                </div>
                <Link
                  href={"/order/menu"}
                  className="w-1/2 flex justify-center items-center bg-[#FF4707]"
                >
                  <span
                    className="text-2xl"
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsLogin(false);
                    }}
                  >
                    Apply
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
