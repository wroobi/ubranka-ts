import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react"; // Dodaj import

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center
        px-4 py-2
        bg-red-500 hover:bg-red-600
        text-white
        rounded-md
        shadow-md
        transition-all duration-300
        hover:shadow-lg
        focus:outline-none
        focus:ring-2 focus:ring-red-300
        group
        cursor-pointer"
    >
      <LogOut
        className="mr-2
          text-white
          group-hover:animate-pulse"
        size={20}
      />
      Wyloguj się
    </button>
  );
}
