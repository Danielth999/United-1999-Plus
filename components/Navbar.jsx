"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo-real-no-bg.png";
import {
  Search,
  LayoutGrid,
  Phone,
  Mail,
  MapPin,
  CircleUser,
  Menu,
  X,
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
} from "@/components/ui/dropdown-menu";

const menu = [
  { title: "ผลิตภัณฑ์เฟสท์", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "อุปกรณ์สำนักงาน", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "ผลิตภัณฑ์ทำความสะอาด", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
  { title: "อุปกรณ์สำนักงาน", subMenu: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"] },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Header section */}
      <header className="md:border-b md:py-1 md:mx-4 hidden md:flex md:justify-end">
        <ul className="flex items-center space-y-2 md:space-y-0 md:space-x-4">
          <li className="flex items-center space-x-2">
            <Phone className="text-[#204d9c]" />
            <span className="text-[#204d9c] font-bold">098-765-fdก432</span>
          </li>
          <li className="flex items-center space-x-2">
            <Mail className="text-[#204d9c]" />
            <a
              href="mailto:dbunited1999@gmail.com"
              className="text-[#204d9c] font-bold"
            >
              test@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <MapPin className="text-[#204d9c]" />
            <Link
              target="_blank"
              className="text-[#204d9c] font-bold"
              href="https://maps.app.goo.gl/3Csiyy9qcEXeckLM8"
            >
              บริษัท ยูไนเต็ด1999 พลัซ จำกัด
            </Link>
          </li>
        </ul>
      </header>
      {/* End header */}

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

          {/* Search Icon for mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-[#204d9c]">
              <Search />
            </button>
          </div>

          {/* Authentication for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-[#204d9c] font-bold">
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/register"
              className="bg-[#204d9c] text-white py-2 px-4 rounded-lg font-bold"
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center outline-none text-[#204d9c] font-bold px-2 py-2 rounded-lg hover:bg-slate-100">
                  <LayoutGrid className="text-[#204d9c] mr-1" />
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
                <span className="block px-3 py-2 rounded-md text-base font-medium text-[#204d9c] hover:bg-gray-100">
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

        {/* Mobile Search Input */}
        {searchOpen && (
          <div className="md:hidden px-4 py-2">
            <input
              type="search"
              className="w-full border outline-none rounded-md p-2"
              placeholder="ค้นหาชื่อสิ้นค้าหรือเลขรหัส SKU"
            />
          </div>
        )}
      </nav>
      {/* End navigation */}
    </>
  );
};

export default Navbar;
