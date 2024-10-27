import React, { useState } from "react";
import { Link } from "react-scroll";
import { IconButton, Drawer } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <header className="min-h-12 w-full flex items-center px-4 sm:px-10 md:px-20 lg:px-60 bg-[#222034]">
      <nav className="hidden md:block w-full">
        <ul className="flex justify-center gap-8">
          <li className="text-lg font-bold cursor-pointer text-[#055658]">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-lg font-bold cursor-pointer text-[#055658]">
            <Link to="ourgames" smooth={true} duration={500}>
              Our Games
            </Link>
          </li>
          <li className="text-lg font-bold cursor-pointer text-[#055658]">
            <Link to="theteam" smooth={true} duration={500}>
              The Team
            </Link>
          </li>
          <li className="text-lg font-bold cursor-pointer text-[#055658]">
            <Link to="reaches" smooth={true} duration={500}>
              Reaches
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <AiOutlineMenu className="text-[#055658]" size={24} />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <ul className="w-48 p-4 flex flex-col gap-4">
            <li
              className="text-lg font-bold cursor-pointer text-[#055658]"
              onClick={toggleDrawer(false)}
            >
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li
              className="text-lg font-bold cursor-pointer text-[#055658]"
              onClick={toggleDrawer(false)}
            >
              <Link to="ourgames" smooth={true} duration={500}>
                Our Games
              </Link>
            </li>
            <li
              className="text-lg font-bold cursor-pointer text-[#055658]"
              onClick={toggleDrawer(false)}
            >
              <Link to="theteam" smooth={true} duration={500}>
                The Team
              </Link>
            </li>
            <li
              className="text-lg font-bold cursor-pointer text-[#055658]"
              onClick={toggleDrawer(false)}
            >
              <Link to="reaches" smooth={true} duration={500}>
                Reaches
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
