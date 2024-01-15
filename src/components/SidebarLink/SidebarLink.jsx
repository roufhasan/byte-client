import { MdFitbit, MdOutlineChatBubbleOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { PiTrendUp, PiSignOut } from "react-icons/pi";
import { LuImage } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";

const SidebarLink = () => {
  return (
    <nav className="h-screen bg-blueGray overflow-y-auto scrollbar-light p-4">
      <div className="text-center">
        <MdFitbit size={34} className="mx-auto" />
        <h2 className="text-xl font-medium uppercase mt-1">Byte</h2>
      </div>

      <ul className="flex flex-col items-center justify-center gap-8 mt-24">
        <li>
          <a href="#">
            <RxDashboard size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <PiTrendUp size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineChatBubbleOutline size={24} className="text-green" />
          </a>
        </li>
        <li>
          <a href="#">
            <LuImage size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <FiMusic size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <CiBookmark size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <PiSignOut size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarLink;
