import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import bg from "../../public/bg.jpg";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fdestinations2.webp&w=256&q=75";
    img.onload = () => setLoading(false);
  }, []); // Run once on component mount

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <img src={bg} className="fixed h-screen w-full -z-10 opacity-60"></img>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
