import { Copyright } from "lucide-react";
import logo from "../../public/Logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 w-full font-semibold text-[#a58154] border-t border-[#a58154] px-2 sm:px-24 py-10 2xl:max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#a58154] pb-6">
        <div className="flex flex-col max-sm:text-center gap-6 justify-center">
          <img src={logo} alt="" className="w-36 max-sm:mx-auto" />
          <span className=" text-md sm:w-4/5 leading-5">
            Turn your next trip into a hassle-free experience with Destina
          </span>
        </div>
        <div className="text-[#a58154] flex flex-col gap-1  leading-5  mt-6">
          <span className="flex flex-row items-center gap-2">
            <Copyright /> {year} Destina : AI Planner built by Adnan Khan
          </span>
          <span className="max-sm:text-center">
            Source code available at{" "}
            <a
              href="https://github.com/adnan-2313/Destina"
              className="underline"
              target="_Destina"
            >
              github/Destina
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
