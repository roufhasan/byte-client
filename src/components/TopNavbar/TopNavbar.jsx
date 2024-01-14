import { Menu, Transition } from "@headlessui/react";
import { RiNotification2Line } from "react-icons/ri";
import { FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import PortraitImg from "../../assets/portrait.jpg";
import { Fragment } from "react";

const TopNavbar = () => {
  return (
    <Menu
      as="nav"
      className="w-full bg-charcoalGray flex items-center relative px-6 py-4"
    >
      {/* Search Field */}
      <div className="flex-1 text-center">
        <form>
          <div className="w-1/4 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search anything..."
                className="w-full bg-darkBlue inline-block border rounded-2xl outline-none pr-10 px-3 py-1"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <FaMagnifyingGlass size={21} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <RiNotification2Line size={20} className="cursor-pointer" />
          <p className="h-4 w-4 bg-green text-xs text-center rounded-full absolute -top-1 -right-1">
            7
          </p>
        </div>
        <Menu.Button className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={PortraitImg}
            alt="person profile picture"
          />
          <FaAngleDown size={20} />
        </Menu.Button>
      </div>

      {/* Drop Down Menus */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-32 bg-white text-black rounded-md pl-4 py-1 absolute right-5 top-full">
          <div className="flex flex-col items-start gap-2">
            <Menu.Item>
              <button>Profile</button>
            </Menu.Item>
            <Menu.Item>
              <button>Log Out</button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default TopNavbar;
