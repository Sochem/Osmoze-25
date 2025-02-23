import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-1">
      <a href="/login"
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Login
      </a>
    </div>
  )
}
