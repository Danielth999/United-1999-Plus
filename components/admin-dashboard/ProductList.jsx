"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
// UI components from shadcn
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Spinner from "../spinner/Spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/users"
      );
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="ค้นหาผู้ใช้"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded-md"
            />
            <Link href="/admin-dashboard/users/add">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                เพิ่มสมาชิก
              </button>
            </Link>
          </div>
          <Table>
            <TableCaption>รายชื่อผู้ใช้ทั้งหมด</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">UserID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell className="font-medium">{user.userId}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>
                    {user.roles
                      .map((role) => role?.role?.roleName || "No Role")
                      .join(", ")}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Link href={`/admin-dashboard/users/edit/${user.userId}`}>
                        <div className="bg-yellow-500 rounded-sm p-2 text-white">
                          <Pencil />
                        </div>
                      </Link>
                      <button
                        onClick={() => handleDelete(user.userId)}
                        className="bg-red-500 rounded-sm p-2 text-white"
                      >
                        <Trash />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default UserList;
