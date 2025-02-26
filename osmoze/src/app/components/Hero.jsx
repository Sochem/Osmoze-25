import BookAnimation from "./BookAnimation";

export default function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/land_bg.png')" }} // Replace with actual image path
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Responsive Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <BookAnimation />
      </div>
    </div>
  );
}
