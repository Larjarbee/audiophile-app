"use client";
import Link from "next/link";
import React from "react";
import CartSvg from "../../assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RouteEnum } from "@/constants/RouteConstant";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-Black-dark text-Grey-dark fixed w-full z-10">
      <nav className="py-6 max-w-6xl mx-auto border-b flex justify-between items-center px-5">
        <h1 className="text-2xl font-extrabold">
          <Link href={RouteEnum.HOME}>audiophile</Link>
        </h1>
        <div className="flex items-center space-x-8">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={cn(
                pathname === link.path ? "text-primary" : "",
                "text-sm font-normal tracking-widest hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="relative">
          <Image
            src={CartSvg}
            width={20}
            height={20}
            alt="cart"
            className=" hover:scale-125 transition-all"
          />
          <div className="px-2 py-1 absolute bg-primary text-Grey-dark -right-4 -top-4 rounded-full text-xs">
            0
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const LINKS = [
  { name: "HOME", path: "/" },
  { name: "HEADPHONES", path: "/headphones" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EARPHONES", path: "/earphones" },
];
