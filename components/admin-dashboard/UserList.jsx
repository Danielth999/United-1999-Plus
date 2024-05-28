"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
// UI components from shadcn


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [addUser, setAddUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/users",
        addUser
      );
      setAddUser({
        username: "",
        email: "",
        password: ""
      });
      fetchUsers(); // Fetch users again to update the list
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

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
      fetchUsers(); // Fetch users again to update the list
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
          
        </>
      )}
    </>
  );
};

export default UserList;
