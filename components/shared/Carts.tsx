import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import HeadphonePng from "../../assets/cart/image-xx99-mark-two-headphones.jpg";
import Image from "next/image";

const Carts = ({ setShowCarts, showCarts }: any) => {
  return (
    <div className="fixed h-screen w-full z-10">
      <div
        onClick={() => setShowCarts(!showCarts)}
        className="fixed h-full w-full bg-black opacity-40"
      />

      <div className="absolute right-48 top-24 p-10 rounded-[10px] space-y-10 bg-Grey-light md:right-24">
        <div className="flex justify-between">
          <h4 className="font-semibold tracking-wider text-lg uppercase">
            cart (3)
          </h4>
          <h4 className="opacity-60 underline">Remove all</h4>
        </div>

        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <Image
              src={HeadphonePng}
              alt="img"
              className="rounded-[10px] w-16"
            />
            <div className="space-y-1">
              <h4 className="font-semibold tracking-wider">XX99 MK II</h4>
              <h4>$ 2,999</h4>
            </div>
          </div>
          <div className="flex items-center bg-Grey-dark">
            <Button variant="ghost" size="sm">
              <Minus width={10} />
            </Button>
            <h6>1</h6>
            <Button variant="ghost" size="sm">
              <Plus width={10} />
            </Button>
          </div>
        </div>

        <div className="flex justify-between">
          <h4 className="opacity-60 uppercase">total</h4>
          <h4 className="font-bold tracking-wider">$2,550</h4>
        </div>

        <Button className="w-full uppercase">checkout</Button>
      </div>
    </div>
  );
};

export default Carts;
