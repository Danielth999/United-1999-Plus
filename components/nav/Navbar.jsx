"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo-real-no-bg.png";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutGrid,
  Phone,
  Mail,
  MapPin,
  CircleUser,
  Menu,
  X,
  KeyRound,
  UserRound,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Header from "./Header";

const menu = [
  { title: "ผลิตภัณฑ์เฟสท์", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "อุปกรณ์สำนักงาน", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "ผลิตภัณฑ์ทำความสะอาด", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "อุปกรณ์สำนักงาน", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);


  return (
    <>
      <Header />
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between h-[80px] px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#204d9c]"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex items-center outline-none text-[#204d9c] font-bold px-2 py-2 md:px-4 md:py-2 rounded-lg hover:bg-slate-100">
                <LayoutGrid className="text-[#204d9c] mr-1" />
                <span className="hidden md:inline">หมวดหมู่</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-2 p-2">
                {menu.map((item) => (
                  <DropdownMenuSub key={item.title}>
                    <DropdownMenuSubTrigger className="hover:bg-gray-100 px-4 py-2 rounded-md flex items-center">
                      {item.title}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-white shadow-lg rounded-md mt-2 p-2">
                        {item.subMenu.map((subItem, index) => (
                          <DropdownMenuItem
                            key={index}
                            className="hover:bg-gray-100 px-4 py-2 rounded-md"
                          >
                            {subItem}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center h-[70px] flex-1 justify-center">
            <input
              type="search"
              className="w-full max-w-md border outline-none rounded-l-md p-2"
              placeholder="ค้นหาชื่อสิ้นค้าหรือเลขรหัส SKU"
            />
            <button className="bg-red-500 p-2 flex justify-center items-center rounded-r-md">
              <Search className="text-white" />
            </button>
          </div>

          {/* Authentication for desktop */}
          {/* Authentication for desktop */}
          {status === "authenticated" && session ? (
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="bg-[#dee4f0] w-36  rounded-2xl flex space-x-2 p-2 items-center hover:bg-[#cfd6e2] transition-colors duration-200">
                    <UserRound className="text-white  rounded-full bg-[#204d9c] p-1" />
                    <span className="text-[#204d9c] font-bold">
                      {session.user.username}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-2">
                  <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                    ข้อมูลส่วนตัว
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                    <Link href={"/admin-dashboard"}> ระบบจัดการ</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => signOut()}
                    className="px-4 py-2 text-red-500 hover:bg-red-50 transition-colors duration-200"
                  >
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <span className="text-[#204d9c] font-bold">Login</span>
              </Link>
              <Link href="/register">
                <span className="bg-[#204d9c] text-white py-2 px-4 rounded-lg font-bold">
                  Register
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Search Input */}
              <div className="md:hidden  px-4 py-2">
                <form className="flex">
                  <input
                    type="search"
                    className="w-full border outline-none rounded-md p-2"
                    placeholder="ค้นหาชื่อสิ้นค้าหรือเลขรหัส SKU"
                  />
                  <button className="bg-red-500 p-2 flex justify-center items-center rounded-r-md">
                    <Search className="text-white" />
                  </button>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center outline-none text-[#204d9c]  px-2 py-2 rounded-lg hover:bg-slate-100">
                  <span>หมวดหมู่</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-2 p-2">
                  {menu.map((item) => (
                    <DropdownMenuSub key={item.title}>
                      <DropdownMenuSubTrigger className="hover:bg-gray-100 px-4 py-2 rounded-md flex items-center">
                        {item.title}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white shadow-lg rounded-md mt-2 p-2">
                          {item.subMenu.map((subItem, index) => (
                            <DropdownMenuItem
                              key={index}
                              className="hover:bg-gray-100 px-4 py-2 rounded-md"
                            >
                              {subItem}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/login">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-[#204d9c] hover:bg-gray-100">
                  เข้าสู่ระบบ
                </span>
              </Link>
              <Link href="/register">
                <span className="space-x-2 flex px-3 py-2 rounded-md text-base font-medium text-[#204d9c] hover:bg-gray-100">
                  สมัครสมาชิก
                </span>
              </Link>

              <Link href="/about">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-[#204d9c] hover:bg-gray-100">
                  เกี่ยวกับเรา
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* End navigation */}
    </>
  );
};

export default Navbar;
