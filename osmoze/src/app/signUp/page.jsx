"use client";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";


export default function SignUp (){
    const router = useRouter();

    const signUpWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if (user) {
            localStorage.setItem('user', JSON.stringify({
                email: user.email,
                name: user.displayName,
                avatar: user.photoURL
            }));
            router.push('/');
        }
    } catch(err) {
        console.log("Error signing up: ", err);
        alert("An error occurred while signing up. Please try again.");
    }
};

    return (
        <>
        <div className="isolate bg-[#040D21] h-[100vh] overflow-hidden">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                </defs>
                </svg>
            </div>

            <main>
                <div className="px-8 lg:px-8 h-[60rem]">
                <div className="flex justify-center items-center h-[100vh] overflow-hidden bg-inherit">
                    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm flex-shrink-0">
                    <div className="flex justify-center mb-6">
                        <Image
                        src="/images/SoChemLogo.svg"
                        alt="Logo"
                        width={130}
                        height={130}
                        className="object-contain"
                        />
                    </div>
                    <div className="text-center pb-4">
                        <h2 className="text-4xl font-bold mb-1  text-sky-600">
                        S<span className="text-black">ochem</span>
                        </h2>
                    </div>

                    <button
                        className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                        onClick={signUpWithGoogle}
                    >
                        <FaGoogle className="mr-2" />
                        Sign up with Google
                    </button>

                    <p className="text-center text-gray-600 mt-6">
                        Already registered?{" "}
                        <Link href={"/login"} passHref>
                        <button className="text-blue-500 hover:underline">
                            Log in
                        </button>
                        </Link>
                    </p>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                </div>
            </main>
        </div>
        </>
    )
}