import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/app/components/button";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="fixed top-4 left-4"
    >
      <LogOut className="size-4" />
      Wyloguj się
    </Button>
  );
}
