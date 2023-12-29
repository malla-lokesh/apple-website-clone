import AppleLogo from "../../../public/svgs/appleLogo";
import CartIcon from "../../../public/svgs/cartIcon";
import SearchIcon from "../../../public/svgs/searchIcon";
import FlyoutNavbar from "./FlyoutNavbar";

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="mx-auto my-0 max-w-5xl px-[22px]">
        <ul className="flex justify-between items-center w-auto my-0 mx-[-8px]">
          <li className="px-2">
            <AppleLogo />
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Store
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Mac
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            iPad
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            iPhone
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Watch
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            AirPods
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            TV & Home
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Entertainment
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Accessories
          </li>
          <li className="px-2 text-gray-500 text-[12px] whitespace-nowrap leading-3">
            Support
          </li>
          <li className="px-2">
            <SearchIcon />
          </li>
          <li className="px-2">
            <CartIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
