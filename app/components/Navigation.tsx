import { Home, Search, User } from "lucide-react";

export default function Navigation() {
  return (
    <>
      <nav className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-54 flex-col gap-6 bg-black/80 p-8 border-r border-white/10">
        <h1 className="text-2xl font-bold mb-4">VideoFeed</h1>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-gray-300 transition-colors"
        >
          <Home className="w-5 h-5" /> <span>Trang chủ</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-gray-300 transition-colors"
        >
            <Search className="w-5 h-5" /> <span>Tìm kiếm</span>
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 hover:text-gray-300 transition-colors"
        >
          <User className="w-5 h-5" /> <span>Hồ sơ</span>
        </a>
      </nav>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around bg-black/90 py-4 md:hidden text-white border-t border-white/10">
        <a href="#" className="flex flex-col items-center gap-1 text-xs hover:text-gray-300">
          <Home className="w-5 h-5" /> <span>Trang chủ</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-xs hover:text-gray-300">
          <Search className="w-5 h-5" /> <span>Tìm kiếm</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-xs hover:text-gray-300">
          <User className="w-5 h-5" /> <span>Hồ sơ</span>
        </a>
      </nav>
    </>
  );
}
