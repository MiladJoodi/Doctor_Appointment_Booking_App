"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/",
  },
  {
    id: 3,
    name: "Contact Us",
    path: "/",
  },
];

const Header = () => {
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user);
  });

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <Image
        src={user?.picture}
        alt="profile-image"
        width={50}
        height={50}
        className="rounded-full"
        />
        // <LogoutLink>
        //     <Button variant="outline">Log out</Button>
        // </LogoutLink>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
