import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Main from "./ui/main/page";

export default async function Page() {
  // Check if user is already logged in
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login");
  }

  return <Main />;
}
