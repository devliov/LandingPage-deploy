import Image from "next/image";
import Star from "../../assets/star.svg";

export default function Feedbacks() {
  return (
    <div className="w-[336.5px] flex gap-1 justify-center items-center">
      <div className="flex">
        <Image src={Star} alt="" height={19} />
        <Image src={Star} alt="" height={19} />
        <Image src={Star} alt="" height={19} />
        <Image src={Star} alt="" height={19} />
        <Image src={Star} alt="" height={19} />
      </div>
      <div className=" flex text-xs gap-1 text-gray-800">
        <div>
          <span>Avaliaçao 4.9</span>
        </div>
        <span>|</span>
        <div>
          <span>Comentários 64</span>
        </div>
      </div>
    </div>
  );
}
