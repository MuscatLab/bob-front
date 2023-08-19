import Link from "next/link";

const ChoiceBtn = ({ data, cart, setCart, isSelected, setIsSelected }: any) => {

  const postOrder = async () => {
    const data = await fetch(`/api/postCard`, {
        method: "POST",
        body: JSON.stringify({
          order: cart,
          id: localStorage.getItem("id")
        })
      }
    );

    
  };

  return (
    <div className="w-full h-16 flex flex-row">
      <Link className="w-1/2 h-full bg-[#343434] flex justify-center items-center text-3xl text-white" href="/">
        Cancel
      </Link>
      <div
        className="w-1/2 h-full bg-[#FF4707] flex justify-center items-center text-3xl text-white"
        onClick={() => {
          postOrder();
        }}
      >
        Order
      </div>
    </div>
  );
};
export default ChoiceBtn;
