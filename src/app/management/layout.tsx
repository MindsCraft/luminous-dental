import ManagementLayout from './components/ManagementLayout';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ManagementSectionLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <ManagementLayout>{children}</ManagementLayout>;
}
