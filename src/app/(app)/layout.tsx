import { Navbar } from "@/components/Navbar";

export default function ClientDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Navbar />
      <div className=""> {children}</div>
    </section>
  );
}