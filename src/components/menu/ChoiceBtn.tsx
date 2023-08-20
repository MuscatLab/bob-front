import { useRouter } from "next/navigation";
import Link from "next/link";

const ChoiceBtn = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {
  const router = useRouter();
  const postOrder = async () => {
    const data = await fetch(`/api/postCart`, {
      method: "POST",
      body: JSON.stringify({
        order: cart,
        id: localStorage.getItem("id"),
      }),
    });
    const result = await data.json();
    
    if (data.ok) {
      const mode = result.point_amount === 0 ? "saveup" : "donation"
      if (mode === "saveup") {
        router.push(`/order/result?ticket=${result["ticket_number"]}
          &dnow=${result["donation_amount"]}
          &tdpoint=${result["total_donation_amount"]}
          &mode=donation
        `);
      } else {
        router.push(`/order/result?ticket=${result["ticket_number"]}
          &dnow=${result["point_amount"]}
          &tdpoint=${result["total_point_amount"]}
          &mode=saveup
        `);
      }
    }
  };

  return (
    <div className="w-full h-16 flex flex-row">
      <Link
        className="w-1/2 h-full bg-[#343434] flex justify-center items-center text-3xl text-white"
        href="/"
      >
        Cancel
      </Link>
      <div
        className="w-1/2 h-full bg-[#FF4707] flex justify-center items-center text-3xl text-white cursor-pointer"
        onClick={async() => {await postOrder()}}>
        Order
      </div>
    </div>
  );
};
export default ChoiceBtn;
