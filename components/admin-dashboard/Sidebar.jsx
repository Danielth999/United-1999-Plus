"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-gray-800">admin</div>
      <div className="h-screen bg-gray-800 text-white w-64">
        <div className="p-6">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-10">
          <Link href="/admin-dashboard/dashboard">
            <div
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/admin-dashboard/dashboard" ? "bg-gray-700" : ""
                }`}
            >
              หน้าหลัก
            </div>
          </Link>
          <Link href="/admin-dashboard/users">
            <div
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/admin-dashboard/users" ? "bg-gray-700" : ""
                }`}
            >
              ผู้ใช้
            </div>
          </Link>
          <Link href="/admin-dashboard/products">
            <div
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/admin-dashboard/products" ? "bg-gray-700" : ""
                }`}
            >
              สินค้า
            </div>
          </Link>
          <Link href="/admin-dashboard/category">
            <div
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/admin-dashboard/category" ? "bg-gray-700" : ""
                }`}
            >
              หมวดหมู่
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
