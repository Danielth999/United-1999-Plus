import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">เข้าสู่ระบบ</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-1">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
               placeholder="ชื่อผู้ใช้"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
            <div>
              <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">เข้าสู่ระบบ</button>
            </div>
            <div className="text-center text-gray-600">
              <a href="#" className="underline">ลืมรหัสผ่าน?</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
