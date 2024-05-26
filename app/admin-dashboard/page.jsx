'use client'
import React from "react";
import Link from "next/link";
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated" || session?.user?.role !== "admin") {
    router.push("/");
  }
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
        <nav className="flex flex-col p-4">
          <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
          <Link href="/users" className="py-2 px-4 hover:bg-gray-700 rounded">
            Users
          </Link>
          <Link href="/settings" className="py-2 px-4 hover:bg-gray-700 rounded">
            Settings
          </Link>
          <Link href="/logout" className="py-2 px-4 hover:bg-gray-700 rounded text-red-500">
            Logout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <div className="bg-white p-4 rounded shadow">
          <p>This is the main content area. You can add your widgets, charts, and other dashboard components here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
