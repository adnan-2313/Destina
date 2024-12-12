import { Link } from "react-router-dom";
import logo from "../../public/Logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full max-w-[85rem] mx-auto fixed  z-10 bg-white bg-opacity-30 ">
      <nav className="py-2 sm:px-8 flex justify-between items-center">
        <Link to="/">
          <img className="w-36 mx-8 md:w-56 z-30" src={logo} alt="" />
        </Link>
        <Button size="lg" className="rounded-3xl mx-8" variant="trip">
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Header;
