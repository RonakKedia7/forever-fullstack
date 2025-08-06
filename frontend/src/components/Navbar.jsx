import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "./../assets/assets";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setShowProfileDropdown(false);
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <img
        onClick={() => navigate("/")}
        className="w-36 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACTS</p>
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(!showSearch)}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
        />

        {/* Profile Icon with Dropdown */}
        <div className="relative group">
          <img
            onClick={() => {
              if (!token) navigate("/login");
              else setShowProfileDropdown((prev) => !prev);
            }}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile icon"
          />

          {/* Dropdown (Desktop: hover, Mobile: state) */}
          {token && (
            <div
              className={`${
                showProfileDropdown ? "block" : "hidden"
              } group-hover:block absolute right-0 pt-4 z-50`}
            >
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                <p
                  onClick={() => {
                    setShowProfileDropdown(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/orders");
                    setShowProfileDropdown(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon (Mobile) */}
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu icon"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute z-100 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 cursor-pointer">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-gray-300"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-gray-300"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-gray-300"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-gray-300"
            to="/contact"
          >
            CONTACTS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
