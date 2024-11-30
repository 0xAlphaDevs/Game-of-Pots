import { Navbar } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export default function ClientDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Navbar />
      <div className="">
        {children}
        <Toaster />
      </div>
    </section>
  );
}