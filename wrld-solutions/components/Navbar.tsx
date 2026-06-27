export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#081120]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
  <div className="w-8 h-8 rounded-full bg-blue-600"></div>

  <span className="text-xl font-bold text-white">
    WRLD SOLUTIONS
  </span>
</div>

        <ul className="hidden md:flex gap-8 text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-400 cursor-pointer">Industries</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
}