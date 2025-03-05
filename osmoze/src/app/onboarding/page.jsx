"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import Select from 'react-select';
import Link from "next/link";

export default function Onboarding() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        branch: "",
        year: "",
        phone: "",
    });

    //   const [userEmail, setUserEmail] = useState("");

    //   useEffect(() => {
    //     const tempUser = localStorage.getItem("tempUser");
    //     if (!tempUser) {
    //       router.push("/signUp");
    //       return;
    //     }
    //     setUserEmail(JSON.parse(tempUser).email);
    //   }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSelectChange = (selectedOption, actionMeta) => {
        setFormData({ ...formData, [actionMeta.name]: selectedOption });
    };

    const branches = [
        { value: "BBE", label: "Biochemical/Biomedical Engineering" },
        { value: "PHT", label: "Pharmaceutical Engineering" },
        { value: "CHE", label: "Chemical Engineering" },
        { value: "IC", label: "Industrial Chemistry" },
        { value: "CER", label: "Ceramic Engineering" },
        { value: "MST", label: "Material Sciences and Technology" },
        { value: "MT", label: "Metallurgical Engineering" },
        { value: "MI", label: "Mining Engineering" },
        { value: "CSE", label: "Computer Science Engineering" },
        { value: "MNC", label: "Mathematics and Computing" },
        { value: "CE", label: "Civil Engineering" },
        { value: "ME", label: "Mechanical Engineering" },
        { value: "EE", label: "Electrical Engineering" },
        { value: "ECE", label: "Electronics Engineering" },
        { value: "EP", label: "Engineering Physics" },
        { value: "ARCH", label: "Architecture & Planning" },
      ];

    const years = [
        { value: "first", label: "First" },
        { value: "second", label: "Second" },
        { value: "third", label: "Third" },
        { value: "fourth", label: "Fourth" },
    ];

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
            <div className="min-h-screen bg-[#180F40] flex items-center justify-center p-4 bg-onboarding">
                <div
                    className=" bg-gradient-to-r from-[#0c081dde] via-[#2c178a] to-[#0c081d] shadow-lg rounded-2xl p-6 relative lg:w-[450px] md:w-[400px] w-[300px]"
                >
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/OsmozeLogo.png"
                            alt="Osmoze'25 Logo"
                            className="w-36 mb-1"
                        />

                        <h2 className="text-3xl font-bold mb-1 text-white">
                            Osmoze<span className="text-sky-600">'25</span>
                        </h2>

                        <p className="text-sm text-white">COMPLETE YOUR PROFILE</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3  text-gray-700">
                            <label className="block text-sm mb-1 text-white">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <div className="mb-3 text-gray-700">
                            <label className="block text-gray-800 text-sm mb-1 text-white">Branch</label>
                            <Select
                                options={branches}
                                value={formData.branch}
                                onChange={handleSelectChange}
                                name="branch"
                                className="w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div className="mb-3 text-gray-700">
                            <label className="block text-gray-800 text-sm mb-1 text-white">Year</label>
                            <Select
                                options={years}
                                value={formData.year}
                                onChange={handleSelectChange}
                                name="year"
                                className="w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div className="mb-3 text-gray-700">
                            <label className="block text-gray-800 text-sm mb-1 text-white">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 mt-3 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Register
                        </button>
                    </form>

                    <div className="text-center mt-2 text-sm text-white">
                        Already Registered?{" "}
                        <Link href={"/login"} passHref>
                                            <button className="text-yellow-200 hover:underline">
                                                Log In
                                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
