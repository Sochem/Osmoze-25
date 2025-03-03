"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function Onboarding() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    branch: "",
    year: "",
    phone: "",
  });

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const tempUser = localStorage.getItem("tempUser");
    if (!tempUser) {
      router.push("/signUp");
      return;
    }
    setUserEmail(JSON.parse(tempUser).email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.username ||
        !formData.branch ||
        !formData.year ||
        !formData.phone
      ) {
        toast.error("All fields are mandatory");
        return;
      }

      if (formData.phone.length !== 10) {
        toast.error("Please enter a valid 10-digit phone number");
        return;
      }

      await setDoc(doc(db, "users", userEmail), {
        ...formData,
        email: userEmail,
      });

      const tempUser = JSON.parse(localStorage.getItem("tempUser"));
      localStorage.setItem("user", JSON.stringify(tempUser));
      localStorage.removeItem("tempUser");

      toast.success("Registration successful... 🎉");
      window.dispatchEvent(new Event("userStateChange"));
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-[#180F40] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Complete Your Profile info.
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">Branch</label>
              <select
                className="w-full p-2 border rounded text-black"
                value={formData.branch}
                onChange={(e) =>
                  setFormData({ ...formData, branch: e.target.value })
                }
              >
                <option value="">Select Branch of study</option>
                <option value="Biochemical-Biomedical Engineering">
                  Biochemical/Biomedical Engineering
                </option>
                <option value="Pharmaceutical Engineering">
                  Pharmaceutical Engineering
                </option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Industrial Chemistry">
                  Industrial Chemistry
                </option>
                <option value="Ceramic Engineering">Ceramic Engineering</option>
                <option value="Material-Sciences and Technology">
                  Material Sciences and Technology
                </option>
                <option value="Metallurgical Engineering">
                  Metallurgical Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
                <option value="Computer science Engineering">
                  Computer Science Engineering
                </option>
                <option value="MNC (Mathematics and Computing)">
                  Mathematics and Computing
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Electronics Engineering">
                  Electronics Engineering
                </option>
                <option value="EP (Engineering Physics)">Engineering Physics</option>
                <option value="Architecture & Planning">
                  Architecture & Planning
                </option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Year</label>
              <select
                className="w-full p-2 border rounded text-black"
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-black"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#281287] text-white py-2 rounded hover:bg-[#180F40] transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
