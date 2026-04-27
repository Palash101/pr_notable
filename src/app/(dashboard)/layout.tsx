import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
