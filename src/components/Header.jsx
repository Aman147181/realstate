"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Montserrat } from "next/font/google";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";
import MobileSidebar from "./MobileNavbar";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);
  console.log(providers);

  const [showmobilemenu, setshowmobilemenu] = useState(false);

  return (
    <div className="w-full px-5 mobile:px-10 sm:px-16 md:px-20 z-20 flex fixed top-0 bg-white text-[#203963] items-center justify-between h-16">
       <MobileSidebar
        isOpen={showmobilemenu}
        onClose={() => setshowmobilemenu(false)}
      />
      <div className="flex item-center space-x-3 sm:space-x-0 justify-center">
        <button
          onClick={() => {
            setshowmobilemenu((el) => !el);
          }}
          className="block sm:hidden text-2xl"
        >
          {!showmobilemenu ? <IoMenuOutline /> : <RxCross1 />}
        </button>
        <Link href="/">
          <div className="flex space-x-1 justify-center items-center">
            <Image
              src="/stateLogo.png"
              width={50}
              height={50}
              alt="Realtor logo"
            />
            <h1
              className={`${montserrat.className}  text-black  font-bold text-lg  uppercase `}
            >
              Realtor
            </h1>
          </div>
        </Link>
      </div>

      <div className="sm:flex hidden space-x-2 md:space-x-5 justify-center items-center">
        <Link className="hover:text-orange-700" href="/">
          home
        </Link>
        <Link className="hover:text-orange-700" href="/property">
          properties
        </Link>
      </div>

      {!session &&
        providers &&
        Object.values(providers).map((provider, index) => (
          <button
            key={index}
            onClick={() => signIn(provider.id)}
            className="  border  hover:border-black rounded-full p-[6px] space-x-2 px-6  text-black   flex items-center justify-start"
          >
            <FcGoogle size={20} />
            <h1 className="hidden sm:flex text-sm">Sign in with Google</h1>
          </button>
        ))}

      {session && (
        <Dropdown className="hidden sm:flex" placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: session.user.image,
              }}
              className="transition-transform hidden md:flex"
              description={session.user.email}
              name={session.user.name}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{session.user.name}</p>
            </DropdownItem>

            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="dashboard">
              {" "}
              <Link href="/dashboard">Admin Dashboard</Link>
            </DropdownItem>

            <DropdownItem
              key="logout"
              onClick={() => {
                signOut();
              }}
              color="danger"
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}

      {session && (
        <div className="flex md:hidden">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Avatar as="button" isBordered src={session.user.image} />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">{session.user.name}</p>
              </DropdownItem>

              <DropdownItem key="profile">My Profile</DropdownItem>
              <DropdownItem key="dashboard">
                {" "}
                <Link href="/dashboard">Admin Dashboard</Link>
              </DropdownItem>

              <DropdownItem
                key="logout"
                onClick={() => {
                  signOut();
                }}
                color="danger"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    
     
    </div>
  );
};

export default Header;
